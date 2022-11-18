import styled from "styled-components";

export const ListStyled = styled.div`
  height: 500px;
  background-color: black;
  border-radius: 15px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex: auto;
  box-shadow: 0 2px 8px grey;
  @media (max-width: 900px) {
    width: auto;
  }
  @media (min-width: 900px) {
    max-width: 600px;
  }
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
  outline: none;
  padding-left: 15px;
`;

export const AddTask = styled(Input)`
  margin: 2px 2px 10px;
  outline: none;
`;


export const TaskContainer = styled.div`
  background-color: white;
  height: 25px;
  margin: 0 2px;
  display: flex;
  align-items: inherit;
  box-sizing: border-box;
  border-bottom: 1px solid gray;

  .taskTrash {
    visibility: hidden;
  }
  
  &:hover {
    opacity: 0.95;
    .taskTrash {
      visibility: visible;
    }
  }
`;

export const Check = styled.input`
  display: none;
`;

export const Uncheck = styled.span`
  border: 2px solid black;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  display: flex;
  margin: 3px;
  border-radius: 3px;
`;

export const InputTask = styled.input`
  box-sizing: border-box;
  height: 24px;
  width: 90%;
  border: none;
  outline: none;
  background-color: inherit;
  ${({checked}) => checked && ({textDecoration: 'line-through'})}
`;

export const TaskBlock = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: auto;
  &::-webkit-scrollbar {
    width: 10px;               /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    background: black;        /* цвет зоны отслеживания */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255,255,255,0.7);    /* цвет бегунка */
    border: 2px solid black;  /* отступ вокруг бегунка */
  }
`;