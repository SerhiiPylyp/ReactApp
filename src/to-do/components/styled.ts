import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  font-size: 40px;
  height: 60px;
  text-align: center;
  font-weight: 500;
  box-shadow: 0 1px 10px #909090;
`;
export const Back = styled(Link)`
  position: absolute;
  top: 15px;
  left: 30px;
  font-size: 20px;
  color: black;
`;
