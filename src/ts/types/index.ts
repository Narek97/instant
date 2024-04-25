import React, { ReactNode } from 'react'

export type ObjectKeysType = {
  [key: string]: any
}

export type MenuTabType = {
  icon: React.ReactNode
  name: string
  url: string
  regexp?: RegExp
}

export type Usertype = {
  emailAddress: string
  firstName: string
  lastName: string
  userID?: number
  orgID?: number
  isAdmin?: boolean
  primaryUserAPIKey?: string
  apiToken: string
  businessType?: {
    value: string
  }
  color?: string
}

export type TableColumnType = {
  id: string
  name: string
  renderFunction?: (data?: any) => ReactNode
  onClick?: () => void
  align?: 'right' | 'center' | 'left'
}

export type TabType = {
  label: string | ReactNode
  value: string
}

export type TabPanelType = {
  page: ReactNode
  value: string
}

export type ProductSwitcherMenuItemType =
  | {
      name: string
      active: boolean
      logo: string
      order: number
      desc: string
      products: ProductSwitcherMenuItemProductType[]
    }
  | undefined

export type ProductSwitcherMenuItemProductType = {
  name: string
  icon: string
  link: string
  active: boolean
  logo: string
  order: number
}

export type DropdownSelectItemType = {
  id?: number
  name?: string | ReactNode
  label?: string
  value: string | number | null
}

export type DropdownWithCategorySelectItemType = {
  id?: number
  headerTitle?: string | ReactNode
  group: DropdownSelectItemType[]
}

export type GetPageContentParamsType = {
  content: any
  defaultPage: ReactNode
  key: string | null
}
