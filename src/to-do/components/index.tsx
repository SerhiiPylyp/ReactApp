import {Content} from "./content";
import {HeaderStyled} from "./styled";
import {ContextWrapper} from "../context/ContextWrapper";
import {FC} from "react";
import React from "react";
import {Back} from "./styled";
import {ArrowLeftOutlined} from "@ant-design/icons";

const ToDo: FC = () => {
  return (
      <div>
          <HeaderStyled>To Do</HeaderStyled>
          <Back to="/" ><ArrowLeftOutlined style={{ fontSize: '30px'}}/></Back>
          <ContextWrapper>
              <Content/>
          </ContextWrapper>
      </div>
  );
}

export default ToDo;
