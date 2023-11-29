/// <reference lib="WebWorker" />
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw'
import { decryptMessage } from '@walletconnect/notify-message-decrypter'
import { initializeApp } from 'firebase/app'
import { getDbSymkeyStore } from './utils/idb'
import mixpanel from 'mixpanel-browser'

declare let self: ServiceWorkerGlobalScope

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAtOP2BXP4RNK0pN_AEBMkVjgmYqklUlKc',
  authDomain: 'javascript-48655.firebaseapp.com',
  projectId: 'javascript-48655',
  storageBucket: 'javascript-48655.appspot.com',
  messagingSenderId: '295861682652',
  appId: '1:295861682652:web:60f4b1e4e1d8adca230f19',
  measurementId: 'G-0BLLC7N3KW'
})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages. Need to keep this alive
const messaging = getMessaging(firebaseApp)

const getSymKey = async (topic: string) => {
  const [getSymKeyUsingTopic] = await getDbSymkeyStore()

  const result: string = await getSymKeyUsingTopic(topic)

  if (result) {
    return result
  }

  throw new Error(`No symkey exists for such topic: ${topic}`)
}

mixpanel.init(import.meta.env.VITE_MIXPANEL_TOKEN)

onBackgroundMessage(messaging, async ev => {
  mixpanel.track("onBackgroundMessage > received_push_event")

  const encoded = ev.data?.blob
  const topic = ev.data?.topic

  if (!encoded || !topic) {
    mixpanel.track(`Received incorrect payload > blob: ${encoded} | topic: ${topic}`)
    return
  }

  const symkey = await getSymKey(topic)
  mixpanel.track(`Decoded symkey: ${symkey}`)

  const m = await decryptMessage({ encoded, symkey, topic })

  mixpanel.track(`Decrypted Message: ${m.title}`)
  return self.registration.showNotification(m.title, {
    icon: m.icon,
    body: m.body
  })
})
