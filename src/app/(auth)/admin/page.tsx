import React from 'react'
import type { Metadata } from 'next'
import AdminPage from '@/pages/admin-page/admin-page'

export const metadata: Metadata = {
  title: 'Admin',
}

const Admin = () => {
  return (
    <div>
      <AdminPage />
    </div>
  )
}

export default Admin
