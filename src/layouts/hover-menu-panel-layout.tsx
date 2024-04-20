'use client'
import React, { FC } from 'react'
import './hover-menu-panel-layout.scss'
import HoverMenuPanel from '@/components/reusable/hover-menu-panel/hover-menu-panel'
import { LEFT_MENU_BOTTOM_TABS, LEFT_MENU_TOP_TABS } from '@/constants/tabs'
import ErrorBoundary from '@/components/reusable/error-boundary/error-boundary'

interface IHoverMenuPanelLayout {
  children: React.ReactNode
}

const HoverMenuPanelLayout: FC<IHoverMenuPanelLayout> = ({ children }) => {
  return (
    <div className={'hover-menu-panel-layout'}>
      <div className={'hover-menu-panel-layout--menu'}>
        <HoverMenuPanel
          topTabs={LEFT_MENU_TOP_TABS}
          bottomTabs={LEFT_MENU_BOTTOM_TABS}
        />
      </div>
      <div className={'hover-menu-panel-layout--content'}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </div>
    </div>
  )
}

export default HoverMenuPanelLayout
