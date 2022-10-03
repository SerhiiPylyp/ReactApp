import {Content} from "./content";
import {HeaderStyled} from "./styled";
import {ContextWrapper} from "../context/ContextWrapper";
import {FC} from "react";
import React from "react";

const ToDo: FC = () => {
  return (
      <div>
          <HeaderStyled>To Do</HeaderStyled>
          <ContextWrapper>
              <Content/>
          </ContextWrapper>
      </div>
  );
}

export default ToDo;
