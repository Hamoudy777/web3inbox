import React, { useContext } from 'react'
import SettingsContext from '../../../contexts/SettingsContext/context'
import { useColorModeValue } from '../../../utils/hooks'

interface TSettingIconProps {
  isFilled?: boolean
}
const SettingIcon: React.FC<TSettingIconProps> = ({ isFilled = false }) => {
  const { mode } = useContext(SettingsContext)
  const themeColors = useColorModeValue(mode)

  return isFilled ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_48_5575)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1802 0.5H11.8198C10.6281 0.5 9.60207 1.34115 9.36835 2.50971L9.09168 3.89308C9.02188 4.24206 8.62016 4.40847 8.32404 4.21105L7.15021 3.4285C6.15865 2.76746 4.83835 2.8982 3.99569 3.74086L3.74085 3.99569C2.89819 4.83835 2.76746 6.15865 3.42849 7.15021L4.21104 8.32404C4.40846 8.62016 4.24206 9.02188 3.89308 9.09168L2.50971 9.36835C1.34115 9.60206 0.5 10.6281 0.5 11.8198V12.1802C0.5 13.3719 1.34115 14.3979 2.50971 14.6316L3.89308 14.9083C4.24206 14.9781 4.40846 15.3798 4.21105 15.676L3.42849 16.8498C2.76746 17.8414 2.89819 19.1616 3.74085 20.0043L3.99569 20.2591C4.83835 21.1018 6.15865 21.2325 7.1502 20.5715L8.32404 19.789C8.62016 19.5915 9.02188 19.7579 9.09168 20.1069L9.36835 21.4903C9.60206 22.6589 10.6281 23.5 11.8198 23.5H12.1802C13.3719 23.5 14.3979 22.6589 14.6316 21.4903L14.9083 20.1069C14.9781 19.7579 15.3798 19.5915 15.676 19.789L16.8498 20.5715C17.8413 21.2325 19.1616 21.1018 20.0043 20.2591L20.2591 20.0043C21.1018 19.1617 21.2325 17.8414 20.5715 16.8498L19.7889 15.676C19.5915 15.3798 19.7579 14.9781 20.1069 14.9083L21.4903 14.6316C22.6589 14.3979 23.5 13.3719 23.5 12.1802V11.8198C23.5 10.6281 22.6588 9.60206 21.4903 9.36835L20.1069 9.09168C19.7579 9.02188 19.5915 8.62016 19.7889 8.32404L20.5715 7.15021C21.2325 6.15865 21.1018 4.83835 20.2591 3.99569L20.0043 3.74086C19.1616 2.89819 17.8413 2.76746 16.8498 3.4285L15.676 4.21105C15.3798 4.40846 14.9781 4.24206 14.9083 3.89308L14.6316 2.50971C14.3979 1.34115 13.3719 0.5 12.1802 0.5ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          fill={themeColors['--icon-color-1']}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1802 0.5H11.8198C10.6281 0.5 9.60207 1.34115 9.36835 2.50971L9.09168 3.89308C9.02188 4.24206 8.62016 4.40847 8.32404 4.21105L7.15021 3.4285C6.15865 2.76746 4.83835 2.8982 3.99569 3.74086L3.74085 3.99569C2.89819 4.83835 2.76746 6.15865 3.42849 7.15021L4.21104 8.32404C4.40846 8.62016 4.24206 9.02188 3.89308 9.09168L2.50971 9.36835C1.34115 9.60206 0.5 10.6281 0.5 11.8198V12.1802C0.5 13.3719 1.34115 14.3979 2.50971 14.6316L3.89308 14.9083C4.24206 14.9781 4.40846 15.3798 4.21105 15.676L3.42849 16.8498C2.76746 17.8414 2.89819 19.1616 3.74085 20.0043L3.99569 20.2591C4.83835 21.1018 6.15865 21.2325 7.1502 20.5715L8.32404 19.789C8.62016 19.5915 9.02188 19.7579 9.09168 20.1069L9.36835 21.4903C9.60206 22.6589 10.6281 23.5 11.8198 23.5H12.1802C13.3719 23.5 14.3979 22.6589 14.6316 21.4903L14.9083 20.1069C14.9781 19.7579 15.3798 19.5915 15.676 19.789L16.8498 20.5715C17.8413 21.2325 19.1616 21.1018 20.0043 20.2591L20.2591 20.0043C21.1018 19.1617 21.2325 17.8414 20.5715 16.8498L19.7889 15.676C19.5915 15.3798 19.7579 14.9781 20.1069 14.9083L21.4903 14.6316C22.6589 14.3979 23.5 13.3719 23.5 12.1802V11.8198C23.5 10.6281 22.6588 9.60206 21.4903 9.36835L20.1069 9.09168C19.7579 9.02188 19.5915 8.62016 19.7889 8.32404L20.5715 7.15021C21.2325 6.15865 21.1018 4.83835 20.2591 3.99569L20.0043 3.74086C19.1616 2.89819 17.8413 2.76746 16.8498 3.4285L15.676 4.21105C15.3798 4.40846 14.9781 4.24206 14.9083 3.89308L14.6316 2.50971C14.3979 1.34115 13.3719 0.5 12.1802 0.5ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          fill={themeColors['--icon-color-1']}
        />
      </g>
      <defs>
        <clipPath id="clip0_48_5575">
          <rect width="24" height="24" fill={themeColors['--icon-color-1']} />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        stroke="#798686"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
      <path
        stroke="#798686"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M18.73 14.73a1.5 1.5 0 0 0 .3 1.65l.05.06A1.82 1.82 0 1 1 16.51 19l-.06-.06a1.5 1.5 0 0 0-1.65-.3 1.5 1.5 0 0 0-.9 1.38v.15a1.82 1.82 0 1 1-3.65 0v-.08a1.5 1.5 0 0 0-.98-1.37 1.5 1.5 0 0 0-1.65.3l-.06.05A1.82 1.82 0 1 1 5 16.51l.06-.06a1.5 1.5 0 0 0 .3-1.65 1.5 1.5 0 0 0-1.38-.9h-.15a1.82 1.82 0 1 1 0-3.65h.08a1.5 1.5 0 0 0 1.37-.98 1.5 1.5 0 0 0-.3-1.65l-.05-.06A1.82 1.82 0 1 1 7.49 5l.06.06a1.5 1.5 0 0 0 1.65.3h.07a1.5 1.5 0 0 0 .91-1.38v-.15a1.82 1.82 0 0 1 3.64 0v.08a1.5 1.5 0 0 0 .9 1.37 1.5 1.5 0 0 0 1.66-.3l.06-.05A1.82 1.82 0 1 1 19 7.49l-.06.06a1.5 1.5 0 0 0-.3 1.65v.07a1.5 1.5 0 0 0 1.38.91h.15a1.82 1.82 0 0 1 0 3.64h-.08a1.5 1.5 0 0 0-1.37.9Z"
      />
    </svg>
  )
}

export default SettingIcon
