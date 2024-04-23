'use client'

import React from 'react'
import './home-page.scss'
import CreateSurveyHome from '@/components/templates/home/create-survey-home/create-survey-home'

const HomePage = () => {
  return (
    <div className={'home-page'}>
      <div className={'home-page--header'}>
        <h2 className={'home-page--header--title'}>
          Welcome to Instant Answers
        </h2>
        <div className={'home-page--header--cpi'}>
          <span>$45 </span>
          <span>USD</span>
        </div>
      </div>
      <div className={'home-page--body'}>
        <CreateSurveyHome />
      </div>
    </div>
  )
}

export default HomePage
