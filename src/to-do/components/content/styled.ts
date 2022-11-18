import  styled from 'styled-components';

export const ContentStyle = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: calc(100vh - 95px);

  @media (max-width: 900px) {
    
  }
`;

export const EmptyContent = styled.div`
  display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
  margin: auto;
  font-size: 25px;
`;

export const AddList = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    font-size: 80px;
    color: white;
    background-color: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0 2px 8px grey;
`;
