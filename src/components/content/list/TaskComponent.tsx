import {ChangeEvent, FC, useContext, useState} from "react";
import {Check, InputTask, TaskContainer, TaskTrash} from "./styled";
import {ToDoContext} from "../../../context";
import {List, Task, TaskKey} from "../../../context/types";

export const TaskComponent: FC<{ task: Task, list: List}> = ({task, list}) => {
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
    const onChangeTaskName = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value)
    }
    const onBlurTaskName = (key: TaskKey, value: string | boolean) => {
        if (taskName) {
            setLists((oldList) => ({
                ...oldList, [list.id]: {...list, tasks: {...list.tasks, [task.id]: {...task, [key]: [value]}}}
            }))
        }
        else removeTask()
    }
    const onCLickCheckbox = (e) => {
        setTaskCheckbox(e.target.checked);
        onBlurTaskName(TaskKey.checked, taskCheckbox)
    }
    return(
        <TaskContainer id={task.id}>
            <Check type="checkbox" checked={taskCheckbox} onClick={onCLickCheckbox}/>
            <InputTask
                value={taskName}
                onChange={onChangeTaskName}
                onBlur={() => onBlurTaskName(TaskKey.name, taskName)}
            />
            <TaskTrash onClick={removeTask}/>
        </TaskContainer>
    )
}
