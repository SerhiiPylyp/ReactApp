import styled from "styled-components";
import {Link} from "react-router-dom";

export const BackButton = styled(Link)`
  position: absolute;
  left: 30px;
  color: black;
  
  & svg {
    font-size: 30px;
  }
  
  @media (max-width: 600px) {
    left: 15px;
    & svg {
      font-size: 20px;
    }
  }
`;