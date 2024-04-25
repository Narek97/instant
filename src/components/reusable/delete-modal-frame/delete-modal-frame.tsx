import React, { FC } from 'react'
import ModalHeader from '@/components/reusable/modal-header/modal-header'
import CustomButton from '@/components/ui/custom-button/custom-button'

interface IDeleteModalFrame {
  item: { type: string; name: string }
  handleClose: () => void
  handleDelete: () => void
  isLoading: boolean
}

const DeleteModalFrame: FC<IDeleteModalFrame> = ({
  item,
  handleClose,
  handleDelete,
  isLoading,
}) => {
  return (
    <div>
      <ModalHeader title={`Delete ${item.name}`} />
      <div className={'custom-modal-content'}>
        {`Are you sure you want to delete ${item.type} ?`}
      </div>
      <div className={'custom-modal-footer'}>
        <CustomButton
          data-testid="delete-modal-frame-test-id"
          onClick={handleClose}
          variant={'text'}
          startIcon={false}
          disabled={isLoading}
          id={'cancel-delete-btn'}
        >
          Cancel
        </CustomButton>
        <CustomButton
          data-testid={'delete-modal-delete-btn-test-id'}
          onClick={handleDelete}
          variant={'contained'}
          startIcon={false}
          disabled={isLoading}
          id={'confirm-delete-btn'}
        >
          Delete
        </CustomButton>
      </div>
    </div>
  )
}

export default DeleteModalFrame
