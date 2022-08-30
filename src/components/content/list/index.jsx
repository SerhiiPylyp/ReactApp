import React, {useState, useContext} from "react";
import {ListName, ListStyled, AddTask, Title, ListTrash} from "./styled";
import {Task} from "./Task";
import {ToDoContext} from "../../../context";

export const List = ({list}) => {
    const [listName, setListName] = useState(list.name);
    const [addTask, setTask] = useState('');
    const {setLists} = useContext(ToDoContext);

    const onChangeListName = (e) => {
        setListName(e.target.value)
    }
    const onBlurListName = () => setLists((oldList) => ({
        ...oldList,
        [list.id]: {...list, name: listName}
    }))

    const deleteList = () => {
        setLists((oldLists) => {
            return  Object.entries(oldLists).reduce((acc, curr) => {
                if (+curr[0] === list.id) return acc;
                return ({...acc, [curr[0]]: curr[1]})
            }, {})
        })
    }

    const onChangeAddTask = (e) => {
        setTask(e.target.value)
    }

    const addNewTask = () => {
        if(addTask) {
            const defaultValue = {
                id: Math.floor(Math.random() * 1000000),
                name: addTask,
                checked: false,
            }
            setLists((oldLists) => ({
                ...oldLists, [list.id]: {...list, tasks: {...list.tasks, [defaultValue.id]: defaultValue}}
            }))
        }
        setTask('')
    }
    return (
        <ListStyled id={list.id}>
            <Title>
                <ListName value={listName} onChange={onChangeListName} onBlur={onBlurListName}/>
                <ListTrash onClick={deleteList}/>
            </Title>
            <div>
                {
                    Object.values(list.tasks).map((task) => <Task list={list} task={task} key={task.id}/>)
                }
            </div>
            <AddTask value={addTask} onChange={onChangeAddTask} onBlur={addNewTask}/>
        </ListStyled>
    )
}