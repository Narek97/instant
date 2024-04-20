'use client'
import React, { FC } from 'react'
import './hover-menu-panel.scss'
import { MenuTabType } from '@/ts/types'
import { useRecoilValue } from 'recoil'
import { userState } from '@/store/atoms/user.atom'
import { usePathname, useRouter } from 'next/navigation'

interface IHoverMenuPanel {
  topTabs: Array<MenuTabType>
  bottomTabs?: Array<MenuTabType>
}

const HoverMenuPanel: FC<IHoverMenuPanel> = ({ topTabs, bottomTabs }) => {
  const adminTabs = ['/admin']
  const router = useRouter()
  const pathname = usePathname()
  const user = useRecoilValue(userState)

  const getActiveTabClass = (tab: MenuTabType) => `hover-menu-panel--nav-link 
              ${tab.regexp && tab.regexp.test(pathname || '') ? 'active' : ''}
           `

  const getMenuTabs = (tabs: Array<MenuTabType>) => {
    return tabs.map((tab) => {
      if (!user?.isAdmin && adminTabs.includes(tab.url)) {
        return null
      }
      return (
        <li
          key={tab.url}
          className={getActiveTabClass(tab)}
          onClick={() => router.push(tab.url)}
        >
          <span className={'hover-menu-panel--nav-link-icon'}>{tab.icon}</span>
          <span className={'hover-menu-panel--nav-link-name'}>{tab.name}</span>
        </li>
      )
    })
  }

  return (
    <div className="hover-menu-panel">
      <ul className="hover-menu-panel--top-tabs">{getMenuTabs(topTabs)}</ul>
      <ul className="hover-menu-panel--bottom-tabs">
        {getMenuTabs(bottomTabs || [])}
      </ul>
    </div>
  )
}

export default HoverMenuPanel
