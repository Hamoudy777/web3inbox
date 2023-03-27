import React, { useContext } from 'react'
import SettingsContext from '../../../contexts/SettingsContext/context'
import { useColorModeValue } from '../../../utils/hooks'

interface TMessageIconProps {
  isFilled?: boolean
}
const MessageIcon: React.FC<TMessageIconProps> = ({ isFilled = false }) => {
  const { mode } = useContext(SettingsContext)
  const themeColors = useColorModeValue(mode)

  return isFilled ? (
    <svg width="20" height="23" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.1046 22.7352L19.7473 1.57962C19.8124 0.741843 18.8778 0.202258 18.1848 0.677481L0.684877 12.6779C-0.0211714 13.162 0.167989 14.2518 0.995905 14.4697L5.89756 15.7597C7.07384 16.0693 8.32064 15.638 9.05417 14.6677L15.1746 6.57203C15.3469 6.34421 15.6619 6.28039 15.9092 6.42319C16.1565 6.56599 16.2587 6.87067 16.1476 7.13374L12.1967 16.4821C11.7232 17.6024 11.9731 18.8979 12.8293 19.7618L16.3974 23.3617C17 23.9698 18.0383 23.5887 18.1046 22.7352Z"
        fill={themeColors['--icon-color-1']}
      />
    </svg>
  ) : (
    <svg width="19" height="23" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8091 2.16263C18.9422 0.484169 17.0685 -0.597657 15.6815 0.356908L0.866854 10.5527C-0.525866 11.5112 -0.17482 13.6581 1.45066 14.1231L4.96981 15.1298C6.38599 15.5349 7.90817 15.0734 8.86098 13.9501L11.2833 11.0943C11.4633 10.8821 11.8031 11.0783 11.7093 11.3402L10.4473 14.8659C9.95087 16.2527 10.3123 17.8017 11.3712 18.8256L14.0026 21.3699C15.2181 22.5452 17.2529 21.7757 17.3866 20.0903L18.8091 2.16263ZM15.0453 20.2916C15.3491 20.5854 15.8578 20.393 15.8913 19.9717L17.3138 2.04398C17.3471 1.62437 16.8786 1.35391 16.5319 1.59255L1.71725 11.7883C1.36907 12.0279 1.45684 12.5647 1.86321 12.6809L5.38236 13.6876C6.23206 13.9307 7.14537 13.6538 7.71705 12.9798L13.2198 6.49233C13.4962 6.16646 13.9661 6.0849 14.3361 6.29855C14.7062 6.5122 14.8705 6.95993 14.7265 7.36223L11.8595 15.3715C11.5617 16.2035 11.7785 17.1329 12.4139 17.7473L15.0453 20.2916Z"
        fill={themeColors['--icon-color-1']}
      />
    </svg>
  )
}

export default MessageIcon
