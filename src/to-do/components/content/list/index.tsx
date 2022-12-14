import React, { useState, useContext, FC, ChangeEvent } from 'react';
import { ListName, ListStyled, AddTask, Title, TaskBlock } from './styled';
import { TaskComponent } from './TaskComponent';
import { ToDoContext } from '../../../context';
import { List } from '../../../context/types';
import { generateUniqueId } from '../../../helpers';
import { DeleteFilled } from '@ant-design/icons';

export const ListComponent: FC<{ list: List }> = ({ list }) => {
  const [listName, setListName] = useState(list.name);
  const [addTask, setTask] = useState('');
  const { setLists } = useContext(ToDoContext);

  const onChangeListName = (e: ChangeEvent<HTMLInputElement>) => {
    setListName(e.target.value);
  };
  const onBlurListName = () =>
    setLists((oldList) => ({
      ...oldList,
      [list.id]: { ...list, name: listName },
    }));

  const deleteList = () => {
    setLists((oldLists) => {
      return Object.entries(oldLists).reduce((acc, curr) => {
        if (+curr[0] === list.id) return acc;
        return { ...acc, [curr[0]]: curr[1] };
      }, {});
    });
  };

  const onChangeAddTask = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addNewTask = () => {
    if (addTask) {
      const defaultValue = {
        id: generateUniqueId(),
        name: addTask,
        checked: false,
      };
      setLists((oldLists) => ({
        ...oldLists,
        [list.id]: { ...list, tasks: { ...list.tasks, [defaultValue.id]: defaultValue } },
      }));
    }
    setTask('');
  };

  const keyPressCheck = (e, callback) => {
    if (e.charCode === 13) callback();
  };
  return (
    <ListStyled id={list.id}>
      <Title>
        <ListName
          value={listName}
          onChange={onChangeListName}
          onBlur={onBlurListName}
          onKeyPress={(e) => keyPressCheck(e, onBlurListName)}
        />
        <div onClick={deleteList}>
          <DeleteFilled style={{ fontSize: '25px' }} />
        </div>
      </Title>
      <TaskBlock>
        {Object.values(list.tasks).map((task) => (
          <TaskComponent list={list} task={task} key={task.id} />
        ))}
      </TaskBlock>
      <AddTask
        value={addTask}
        placeholder={'add new task'}
        onChange={onChangeAddTask}
        onBlur={addNewTask}
        onKeyPress={(e) => keyPressCheck(e, addNewTask)}
      />
    </ListStyled>
  );
};
