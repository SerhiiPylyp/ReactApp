import {EmptyContent, AddList, ContentStyle} from "./styled";
import {FC, useContext, useState} from "react";
import {ToDoContext} from "../../context";
import {ListComponent} from "./list";
import {List, Lists} from "../../context/types";
import React from "react";

export const Content: FC = (): JSX.Element => {
    const {lists, setLists} = useContext(ToDoContext);
    const listMap: List[] = Object.values(lists);

    const addNewList = () => {
        const defaultValue = {
            id: Math.floor(Math.random() * 1000000),
            name: 'Name',
            tasks: {},
        }
        setLists((oldList: Lists):Lists => ({...oldList, [defaultValue.id]: defaultValue}))
    }

    return (
        <ContentStyle>
            <EmptyContent isVisible={!listMap.length}>you don't have list</EmptyContent>
            {listMap.map((item) => <ListComponent list={item} key={item.id} />)}
            <AddList onClick={addNewList}>+</AddList>
        </ContentStyle>
    )
}