import React, { FC, ReactNode } from 'react'
import './modal-header.scss'
import QuestionMark from '@/assets/icons/QuestionMark.svg'

interface IModalHeader {
  title: string | ReactNode
  infoLink?: string
}
const ModalHeader: FC<IModalHeader> = ({ title, infoLink }) => {
  return (
    <div className={'modal-header'}>
      <div className={'modal-header--title'}>{title}</div>
      {infoLink && (
        <button
          data-testid="question-mark-test-id"
          className={'modal-header--question-mark'}
          onClick={() => {
            window.open(infoLink, '', 'width=600,height=400')
          }}
        >
          <QuestionMark />
        </button>
      )}
    </div>
  )
}

export default ModalHeader
