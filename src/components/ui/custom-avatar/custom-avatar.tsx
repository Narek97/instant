import React, { Avatar } from '@mui/material'
import { AvatarProps } from '@mui/material/Avatar/Avatar'
import { FC, memo } from 'react'

interface IAvatar {
  name: string
  newClassName?: string
}

const CustomAvatar: FC<IAvatar & AvatarProps> = ({
  name,
  newClassName,
  ...props
}) => {
  return (
    <Avatar
      {...props}
      aria-label={'Avatar'}
      className={newClassName}
      sx={{
        display: 'flex',
        alignItems: 'centre',
        justifyContent: 'center',
        bgcolor: 'transparent',
        textTransform: 'uppercase',
        border: '1px solid',
        width: 32,
        height: 32,
        lineHeight: 0,
        fontSize: '16px',
      }}
    >
      {name}
    </Avatar>
  )
}

export default memo(CustomAvatar)
