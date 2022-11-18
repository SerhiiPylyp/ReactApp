import styled from 'styled-components';

export const ContentStyle = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: calc(100vh - 95px);

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyContent = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  grid-column: 2;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-size: 25px;
`;

export const AddList = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  font-size: 60px;
  color: white;
  background-color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 2px 8px grey;
`;
