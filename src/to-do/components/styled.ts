import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  font-size: 60px;
  text-align: center;
  font-weight: bold;
`;
export const Back = styled(Link)`
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 20px;
  color: black;
`;
