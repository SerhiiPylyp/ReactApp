import styled from 'styled-components';
import { InputNumber } from 'antd';
import { Link } from 'react-router-dom';

export const Container = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 220px;
`;

export const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 230px;
  flex-direction: column;
  border: 1px solid #40a9ff;
  border-radius: 10px;
  margin-top: 20px;
`;

export const InputBlock = styled.div`
  display: flex;
  margin: 0 5px 10px 5px;
  flex-direction: column;
`;

export const Input = styled(InputNumber)`
  width: auto;
`;

export const Bmi = styled.span`
  font-size: 40px;
`;

export const Health = styled.span`
  font-size: 30px;
  color: ${({ color }) => color};
`;

export const Back = styled(Link)`
  position: absolute;
  left: 30px;
  font-size: 20px;
  color: black;
`;
export const Title = styled.span`
  font-size: 30px;
  position: relative;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
