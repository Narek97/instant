import React, { FC } from 'react'
import BaseLayout from '@/layouts/base-layout'
import Header from '@/components/templates/header-templates/header'

interface IAuthLayout {
  children: React.ReactNode
}
const AuthLayout: FC<IAuthLayout> = ({ children }) => {
  return (
    <>
      <BaseLayout>
        <>
          <div className={'base-layout--header'}>
            <Header />
          </div>
          <main>{children}</main>
        </>
      </BaseLayout>
    </>
  )
}

export default AuthLayout
