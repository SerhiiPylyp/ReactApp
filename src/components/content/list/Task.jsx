import React, {useState, useContext} from "react";
import {TaskContainer, InputTask, Check, TaskTrash} from "./styled";
import {ToDoContext} from "../../../context";

export const Task = ({task, list}) => {
    const {setLists} = useContext(ToDoContext);
    const [taskName, setTaskName] = useState(task.name);
    const [taskCheckbox, setTaskCheckbox] = useState(task.checked);
    const removeTask = () => {
        setLists((oldList) => ({
            ...oldList, [list.id]: {...list, tasks:
                        Object.entries(list.tasks).reduce(
                            (acc, curr) => {
                                if (+curr[0] === task.id) return acc;
                                return ({...acc, [curr[0]]: curr[1]})
                            }, {}
                        )}
        }))
    }
    const onChangeTaskName = (e) => {
        setTaskName(e.target.value)
    }
    const onBlurTaskName = (key, value) => {
        if (taskName) {
            setLists((oldList) => ({
                ...oldList, [list.id]: {...list, tasks: {...list.tasks, [task.id]: {...task, [key]: [value]}}}
            }))
        }
        else removeTask()
    }
    const onCLickCheckbox = (e) => {
        setTaskCheckbox(e.target.checked);
        onBlurTaskName('checked', taskCheckbox)
    }
    return(
        <TaskContainer id={task.id}>
            <Check type="checkbox" checked={taskCheckbox} onClick={onCLickCheckbox}/>
            <InputTask value={taskName} onChange={onChangeTaskName} onBlur={() => onBlurTaskName('name', taskName)}/>
            <TaskTrash onClick={removeTask}/>
        </TaskContainer>
    )
}
