'use client'
import React, { Suspense } from 'react'
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { APP_URL } from '@/constants/env'
import CustomLoader from '@/components/ui/custom-loader/custom-loader'
import { setCookies } from '@/utils/cookies'
import { TOKEN_NAME } from '@/constants'
import CustomError from '@/components/ui/custome-error/custome-error'
import useSWR from 'swr'
import { axiosGetFetcher } from '@/utils/swr-fetcher'

const Page = () => {
  const router = useRouter()
  const searchParams = useSearchParams() as ReadonlyURLSearchParams
  const code = searchParams?.get('code') as string

  const { isLoading, error } = useSWR(
    `${APP_URL}/api/generate-token?code=${code}`,
    axiosGetFetcher,
    {
      onSuccess: (data) => {
        setCookies(TOKEN_NAME, data.access_token)
        router.push('/surveys')
      },
      onError: () => {},
    }
  )

  if (isLoading) {
    return <CustomLoader />
  }

  if (error) {
    return <CustomError error={error} />
  }

  return <div></div>
}

function AuthPage() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  )
}

export default AuthPage
