import React, { FC } from 'react';
import { Button, Buttons } from './styled';
const Links: FC = () => {
  return (
    <Buttons>
      <Button to='/fitness-calculator' color='#1890ff'>
        Fitness Calculator
      </Button>
      <Button to='/to-do' color='black'>
        to-do
      </Button>
    </Buttons>
  );
};

export default Links;
