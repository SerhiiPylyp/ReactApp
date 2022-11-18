import { Content } from './content'
import { HeaderStyled, Back } from './styled'
import { ContextWrapper } from '../context/ContextWrapper'
import React, { FC } from 'react'
import { LeftOutlined } from '@ant-design/icons'

const ToDo: FC = () => {
  return (
    <div>
      <HeaderStyled>To Do</HeaderStyled>
      <Back to='/'>
        <LeftOutlined />
      </Back>
      <ContextWrapper>
        <Content />
      </ContextWrapper>
    </div>
  )
}

export default ToDo
