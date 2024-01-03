import { NotifyClientTypes } from '@walletconnect/notify-client'

import { INotifyApp } from '@/utils/types'

export function isUnVerified(app: NotifyClientTypes.NotifySubscription, projects: INotifyApp[]) {
  const project = projects.find(project => project.url.includes(app.metadata.appDomain))
  const isVerified = project && project?.isVerified !== true

  return isVerified
}
