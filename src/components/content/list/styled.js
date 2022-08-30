import styled from "styled-components";
import trash from "../../../img/trash.png";

export const ListStyled = styled.div`
  width: 600px;
  height: 500px;
  background-color: black;
  border-radius: 15px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  background-color: white;
  height: 50px;
  border: none;
  margin: 10px 2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  display: flex;
  border: none;
  box-sizing: border-box;
`;
export const ListName = styled(Input)`
  height: 50px;
  width: 95%;
  
`;

export const AddTask = styled(Input)`
  margin: auto 2px 10px;
`;


export const TaskContainer = styled.div`
  background-color: white;
  height: 25px;
  margin: 0 2px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const Check = styled.input`

`;

export const InputTask = styled.input`
  box-sizing: border-box;
  height: 25px;
  width: 90%;
  border: none;
`;

export const TaskTrash = styled.div`
  background-image: url(${trash});
  width: 20px;
  height: 20px;
  background-size: cover;
`;

export const ListTrash = styled(TaskTrash)`
  width: 25px;
  height: 25px;
`;