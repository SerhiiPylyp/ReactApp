import { Content } from './content';
import { HeaderStyled, Back } from './styled';
import { ContextWrapper } from '../context/ContextWrapper';
import React, { FC } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { AppContainer } from '../../styled';

const ToDo: FC = () => {
  return (
    <AppContainer>
      <HeaderStyled>To Do</HeaderStyled>
      <Back to='/'>
        <LeftOutlined />
      </Back>
      <ContextWrapper>
        <Content />
      </ContextWrapper>
    </AppContainer>
  );
};

export default ToDo;
