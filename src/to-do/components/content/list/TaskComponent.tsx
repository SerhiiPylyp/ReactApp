import React, { ChangeEvent, FC, useContext, useState } from 'react'
import { Check, InputTask, TaskContainer, TaskTrash, Uncheck } from './styled'
import { ToDoContext } from '../../../context'
import { List, Task, TaskKey } from '../../../context/types'
import { Checkbox } from './Checkbox'

export const TaskComponent: FC<{ task: Task; list: List }> = ({ task, list }) => {
  const { setLists } = useContext(ToDoContext)
  const [taskName, setTaskName] = useState(task.name)
  const [taskCheckbox, setTaskCheckbox] = useState(task.checked)
  const removeTask = () => {
    setLists((oldList) => ({
      ...oldList,
      [list.id]: {
        ...list,
        tasks: Object.entries(list.tasks).reduce((acc, curr) => {
          if (+curr[0] === task.id) return acc
          return { ...acc, [curr[0]]: curr[1] }
        }, {}),
      },
    }))
  }
  const onChangeTaskName = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value)
  }
  const onBlurTaskName = (key: TaskKey, value: string | boolean) => {
    if (taskName) {
      setLists((oldList) => ({
        ...oldList,
        [list.id]: {
          ...list,
          tasks: { ...list.tasks, [task.id]: { ...task, [key]: value } },
        },
      }))
    } else removeTask()
  }

  const onCLickCheckbox = (e) => {
    setTaskCheckbox(e.target.checked)
    onBlurTaskName(TaskKey.checked, e.target.checked)
  }

  return (
    <TaskContainer id={task.id}>
      <Check
        type='checkbox'
        checked={taskCheckbox}
        name={`checkbox${task.id}`}
        id={`checkbox${task.id}`}
        onChange={onCLickCheckbox}
      />
      <label htmlFor={`checkbox${task.id}`}>{task.checked ? <Checkbox /> : <Uncheck />}</label>
      <InputTask
        checked={taskCheckbox}
        value={taskName}
        onChange={onChangeTaskName}
        onBlur={() => onBlurTaskName(TaskKey.name, taskName)}
      />
      <TaskTrash className='taskTrash' onClick={removeTask} />
    </TaskContainer>
  )
}
