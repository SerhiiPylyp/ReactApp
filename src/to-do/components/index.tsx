import {Content} from "./content";
import {HeaderStyled} from "./styled";
import {ContextWrapper} from "../context/ContextWrapper";
import {FC} from "react";
import React from "react";
import {Back} from "./styled";
import {LeftOutlined} from "@ant-design/icons";

const ToDo: FC = () => {
  return (
      <div>
          <HeaderStyled>To Do</HeaderStyled>
          <Back to="/" ><LeftOutlined /></Back>
          <ContextWrapper>
              <Content/>
          </ContextWrapper>
      </div>
  );
}

export default ToDo;
