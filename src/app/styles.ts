'use client'

import styled from 'styled-components';
import { colorDarkGray, colorDefaultWhite, colorGainsboro, chartreuse, colorRed } from '../const/const-colors';

export const TodosSection = styled.section`
  padding: 40px 15px;

  @media (min-width: 768px) {
    padding: 60px 20px;
  }
`;

export const TodosContainer = styled.div`
  box-shadow: 0 0 30px 0 ${colorGainsboro};
`;

export const TitleSection = styled.h1`
  margin: 0 0 30px 0;
  text-align: center;
  font-weight: 400;
  font-size: 55px;

  @media (min-width: 768px) {
   font-size: 80px;
  }
`;

export const AddTaskField = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid ${colorDarkGray};
  background-color: ${colorDefaultWhite};

  &:focus-within {
    outline: 1px solid ${colorDarkGray};
  }
`;

export const StyledInput = styled.input.attrs(() => ({
  type: 'text',
  name: 'new-task',
  placeholder: 'What needs to be done?',
  'aria-label': 'Enter a new task',
}))`
  border: none;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  font-size: 17px;

  &:focus-visible {
    outline: none;
  }

  @media (min-width: 768px) {
    font-size: 25px;
    gap: 18px;
  }
`;

export const AddButton = styled.button`
  background-color: ${chartreuse};
  border: none;
  border-radius: 5px;
  font-size: 17px;
  padding: 8px 25px;

  @media (min-width: 768px) {
  padding: 8px 30px;
  font-size: 25px;
  }
`

export const TaskList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  background: ${colorDefaultWhite};
`;

export const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  padding: 13px;
  border-bottom: 1px solid ${colorDarkGray};
`;

export const DeleteTaskButton = styled.button`
  border: none;
  position: relative;
  width: 25px;
  height: 25px;
  background-color: inherit;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 25px;
    height: 2px;
    background-color: ${colorRed};
  }

    &::after {
    transform: rotate(45deg);
  }

    &::before {
    transform: rotate(-45deg);
  }

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }
`
