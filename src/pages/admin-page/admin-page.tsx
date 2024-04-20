'use client'
import React, { Suspense, useCallback } from 'react'
import './admin-page.scss'
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import CustomTabs from '@/components/ui/custom-tabs/custom-tabs'
import { ADMIN_TABS, ADMIN_TAB_PANELS } from '@/constants/tabs'

const Page = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams() as ReadonlyURLSearchParams
  const { replace } = useRouter()
  const tab = searchParams?.get('tab') || 'error-logs'

  const onSelectTab = useCallback(
    (tabValue: string) => {
      const params = new URLSearchParams(searchParams)
      params.set('tab', tabValue)
      replace(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [pathname, replace, searchParams]
  )

  return (
    <div className={'admin'}>
      <h2 className={'admin--title'}>Admin</h2>
      <CustomTabs
        tabValue={tab}
        setTabValue={onSelectTab}
        showTabsBottomLine={true}
        activeColor={'#545E6B'}
        inactiveColor={'#9B9B9B'}
        tabsBottomBorderColor={'#D8D8D8'}
        tabs={ADMIN_TABS}
        tabPanels={ADMIN_TAB_PANELS}
      />
    </div>
  )
}

function AdminPage() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  )
}

export default AdminPage
