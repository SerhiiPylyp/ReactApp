import {EmptyContent, AddList, ContentStyle} from "./styled";
import {useContext, useState} from "react";
import {ToDoContext} from "../../context";
import {List} from "./list/index";
export const Content = () => {
    const {lists, setLists} = useContext(ToDoContext);
    const listMap = Object.values(lists);

    const addNewList = () => {
        const defaultValue = {
            id: Math.floor(Math.random() * 1000000),
            name: 'Name',
            tasks: {},
        }
        setLists((oldList) => ({...oldList, [defaultValue.id]: defaultValue}))
    }

    return (
        <ContentStyle>
            <EmptyContent isVisible={!listMap.length}>you don't have list</EmptyContent>
            {listMap.map((item) => <List list={item} key={item.id} />)}
            <AddList onClick={addNewList}>+</AddList>
        </ContentStyle>
    )
}