'use client'
import React, { FC } from 'react'
import {
  APP_URL,
  AUTHORIZATION_URL,
  CALLBACK_URL,
  CLIENT_ID,
} from '@/constants/env'
import { getCookies } from '@/utils/cookies'
import { TOKEN_NAME } from '@/constants'
import useSWR from 'swr'
import { axiosGetFetcher } from '@/utils/swr-fetcher'
import CustomLoader from '@/components/ui/custom-loader/custom-loader'
import { useRecoilState } from 'recoil'
import { userState } from '@/store/atoms/user.atom'
import CustomError from '@/components/ui/custome-error/custome-error'

interface ILayout {
  children: React.ReactNode
}

const BaseLayout: FC<ILayout> = ({ children }) => {
  const token = getCookies(TOKEN_NAME)

  const [user, setUser] = useRecoilState(userState)

  const redirectToLogin = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `${AUTHORIZATION_URL}/?state=null&redirect_uri=${CALLBACK_URL}&response_type=code&client_id=${CLIENT_ID}`
    }
  }

  const { isLoading: isLoadingGetMe, error: errorGetMe } = useSWR(
    token && !user ? `${APP_URL}/api/auth` : null,
    axiosGetFetcher,
    {
      onSuccess: (data) => {
        setUser(data)
      },
      onError: () => {},
    }
  )

  if (!token) {
    redirectToLogin()
  }

  if (isLoadingGetMe || !token) {
    return <CustomLoader />
  }
  if (errorGetMe) {
    return <CustomError error={errorGetMe.message} />
  }

  return <>{children}</>
}

export default BaseLayout
