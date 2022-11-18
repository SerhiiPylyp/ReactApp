import styled from "styled-components";
import {InputNumber} from "antd";

export const FitnessCalculatorContainer = styled.div`
  min-width: 320px;
  padding: 0 15px 15px;
`;

export const Container = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 15px auto 0;
  
  button, input {
    border-radius: 7px;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height: 220px;
  padding-top: 15px;
  box-sizing: border-box;
`;

export const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  height: 230px;
  flex-direction: column;
  border: 1px solid #40a9ff;
  border-radius: 10px;
  margin-top: 35px;
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

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #1890ff;
  padding: 15px 0;
`;
