import React, { Button } from '@mui/material'
import './user-popover.scss'
import { useRecoilValue } from 'recoil'
import Bell from '@/assets/icons/header-icons/bell.svg'
import Bug from '@/assets/icons/header-icons/bug.svg'
// import CustomSwitcher from "../../../ui/custom-switcher/custom-switcher.tsx";
import { TOKEN_NAME } from '@/constants'
import { userState } from '@/store/atoms/user.atom'
import { removeCookies } from '@/utils/cookies'

const UserPopover = () => {
  const user = useRecoilValue(userState)
  const logout = () => {
    removeCookies(TOKEN_NAME)
    window.location.href = 'https://www.questionpro.com/a/logout.do'
  }

  return (
    <div className={'header-user-popover'}>
      <div className={'header-user-popover--block'}>
        <Bell />
        <div className={'header-user-popover--email-company-block'}>
          <p
            className={'header-user-popover--info'}
            data-testid={'user-email-address-test-id'}
          >
            {`Email address - ${user?.emailAddress}`}
          </p>
          <p className={'header-user-popover--info'}>{`Company name - `}</p>
        </div>
      </div>
      <div className={'header-user-popover--block'}>
        <Bug />
        <div className={'header-user-popover--id-apikey-block'}>
          <p className={'header-user-popover--info'}>
            {`Organization id - ${user?.orgID}`}
          </p>
          <p className={'header-user-popover--info'}>
            {`Organization ApiKey - ${user?.primaryUserAPIKey}`}
          </p>
        </div>
      </div>
      <div className={'header-user-popover--footer'}>
        {/*<CustomSwitcher label={"Email subscribed"} labelPlacement={"start"} />*/}
        <Button onClick={logout} data-testid="logout-test-id">
          Log out
        </Button>
      </div>
    </div>
  )
}

export default UserPopover
