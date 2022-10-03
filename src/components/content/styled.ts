import  styled from 'styled-components';

export const ContentStyle = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 69px);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
`;
export const EmptyContent = styled.div`
  display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
`;
export const AddList = styled.div`
    position: absolute;
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
    padding-bottom: 10px;
    box-sizing: border-box;
`;