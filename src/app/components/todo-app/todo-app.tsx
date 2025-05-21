'use client';

import CustomCheckbox from '@/components/common/custom-checkbox/custom-checkbox';
import {
  TodosContainer,
  StyledInput,
  TaskList,
  TaskItem,
  AddButton,
  AddTaskField,
  DeleteTaskButton,
} from './styles';
import { useState, MouseEvent, useEffect } from 'react';
import { TTasks } from '@/types/task';

export default function TodoApp() {
  const [tasks, setTasks] = useState<TTasks>([]);
  const [textNewTask, setTextNewTask] = useState<string>('');

  function handleAddButtonClick() {
    setTasks([
      {
        id: crypto.randomUUID(),
        text: textNewTask,
      },
      ...tasks,
    ]);
    setTextNewTask('');
  }

  function handleDeleteTaskButtonClick(evt: MouseEvent<HTMLButtonElement>) {
    const taskId = evt.currentTarget.dataset.taskId;
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    console.log(taskId);
  }

  useEffect(() => {
    const taskInStorage = localStorage.getItem('tasks');
    if (taskInStorage) {
      setTasks(JSON.parse(taskInStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TodosContainer>
      <AddTaskField>
        <StyledInput
          onChange={(evt) => setTextNewTask(evt.currentTarget.value)}
          value={textNewTask}
        />
        <AddButton disabled={textNewTask === ''} onClick={handleAddButtonClick}>
          Add
        </AddButton>
      </AddTaskField>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <CustomCheckbox labelText={task.text} />
            <DeleteTaskButton
              data-task-id={task.id}
              onClick={handleDeleteTaskButtonClick}
            />
          </TaskItem>
        ))}
      </TaskList>
    </TodosContainer>
  );
}
