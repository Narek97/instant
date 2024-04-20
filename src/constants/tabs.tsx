'use client'
import React from 'react'
import { MenuTabType, TabPanelType, TabType } from '@/ts/types'
import Home from '../assets/icons/home.svg'
import Admin from '../assets/icons/admin.svg'
import ErrorLogs from '@/components/templates/admin/error-logs/error-logs'
import ApiLogs from '@/components/templates/admin/api-logs/api-logs'
import Cpi from '@/components/templates/admin/cpi/cpi'

export const LEFT_MENU_TOP_TABS: Array<MenuTabType> = [
  {
    icon: <Home />,
    name: 'Surveys',
    url: '/surveys',
    regexp: /^(\/surveys)?$/,
  },
]

export const LEFT_MENU_BOTTOM_TABS: Array<MenuTabType> = [
  {
    icon: <Admin />,
    name: 'Admin',
    url: '/admin',
    regexp: /^(\/admin)?$/,
  },
]

export const ADMIN_TABS: TabType[] = [
  { label: 'Error Logs', value: 'error-logs' },
  { label: 'Api Logs', value: 'api-logs' },
  { label: 'CPI', value: 'cpi' },
]

export const ADMIN_TAB_PANELS: TabPanelType[] = [
  { page: <ErrorLogs />, value: 'error-logs' },
  { page: <ApiLogs />, value: 'api-logs' },
  { page: <Cpi />, value: 'cpi' },
]
