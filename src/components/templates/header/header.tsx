'use client'
import { ClickAwayListener } from '@mui/material'
import React, { useState } from 'react'
import './header.scss'
import { useRecoilValue } from 'recoil'
import BottomArrow from '@/assets/icons/bottom-arrow.svg'
import QPLogo from '@/assets/icons/header-icons/logo.svg'
import ProductSwitcher from '@/components/templates/header/product-switcher/product-switcher'
import CustomPopover from '@/components/ui/custom-popover/custom-popover'
import CustomAvatar from '@/components/ui/custom-avatar/custom-avatar'
import { userState } from '@/store/atoms/user.atom'
import UserPopover from '@/components/templates/header/user-popover/user-popover'

const Header = () => {
  const user = useRecoilValue(userState)
  const [openSwitcher, setOpenSwitcher] = useState<boolean>(false)

  const handleClick = () => {
    setOpenSwitcher((prev) => !prev)
  }

  const handleClickAway = () => {
    setOpenSwitcher(false)
  }

  return (
    <header
      className={`base-header ${openSwitcher ? 'base-header-open' : ''}`}
      data-testid="base-header-test-id"
    >
      <div className={'base-header--left-block'}>
        <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={handleClickAway}
        >
          <div onClick={handleClick} data-testid="main-logo-test-id">
            <div className={'base-header--menu'}>
              <QPLogo />
              <h1 className={'base-header--menu--title'}>Instant</h1>
              <BottomArrow className="base-header--menu--arrow" fill={'#fff'} />
            </div>
            <ProductSwitcher isOpen={openSwitcher} />
          </div>
        </ClickAwayListener>
      </div>
      {/*<CustomBreadCrumbs />*/}
      <div className={'base-header--right-block'}>
        <CustomPopover
          popoverButton={
            <CustomAvatar
              newClassName={'cursor-pointer'}
              name={
                user?.firstName || user?.lastName
                  ? user?.firstName?.slice(0, 1) + user?.lastName?.slice(0, 1)
                  : user?.emailAddress?.slice(0, 2) || 'User'
              }
            />
          }
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          sxStyles={{ top: '8px' }}
        >
          <UserPopover />
        </CustomPopover>
      </div>
    </header>
  )
}

export default Header
