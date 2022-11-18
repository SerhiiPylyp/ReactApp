import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Buttons = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(Link)`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  color: aliceblue;
  font-weight: bold;
  text-decoration: none;
  font-size: 25px;
  background-color: ${({ color }) => color};
  text-align: center;
`;
