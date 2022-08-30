import {Content} from "./content";
import {HeaderStyled} from "./styled";
import React from "react";
import {ContextWrapper} from "../context/ContextWrapper";

const App = () => {
  return (
      <div>
          <HeaderStyled>To Do</HeaderStyled>
          <ContextWrapper>
              <Content/>
          </ContextWrapper>
      </div>
  );
}

export default App;
