import type { Metadata } from 'next'
import './layout.scss'
import '@/assets/styles/base.scss'
import React from 'react'
import RecoilProvider from '@/providers/recoil-provider'
import ThemProvider from '@/providers/them-provider'
import axios from 'axios'
import { getCookies } from '@/utils/cookies'
import { TOKEN_NAME } from '@/constants'

export const metadata: Metadata = {
  title: 'Instant answers',
  description: 'answers',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const token = getCookies(TOKEN_NAME)

  axios.interceptors.request.use(
    function (config: any) {
      if (config.headers) {
        config.headers = {
          ...config.headers,
          'Cache-Control': 'max-age=31536000',
        }
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  return (
    <html lang="en">
      <body className="base-layout">
        <RecoilProvider>
          <ThemProvider>
            <>{children}</>
          </ThemProvider>
        </RecoilProvider>
      </body>
    </html>
  )
}
