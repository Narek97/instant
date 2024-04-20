'use client'
import React from 'react'
import './not-found-page.scss'
import CustomButton from '../../components/ui/custom-button/custom-button'
import { useRouter } from 'next/navigation'

const NotFoundPage = () => {
  const router = useRouter()

  const onHandleNavigate = () => {
    router.push('/surveys')
  }

  return (
    <div className={'not-found'}>
      <p> Page Not Found !</p>
      <CustomButton onClick={onHandleNavigate}>{'Home'}</CustomButton>
    </div>
  )
}

export default NotFoundPage
