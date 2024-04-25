import React from 'react'
import type { Metadata } from 'next'
import HomePage from '@/pages/home-page/home-page'

export const metadata: Metadata = {
  title: 'Home',
}

const Page = () => {
  return (
    <>
      <HomePage />
    </>
  )
}

export default Page
