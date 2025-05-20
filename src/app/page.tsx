import CustomCheckbox from '@/components/common/custom-checkbox/custom-checkbox';
import { TodosSection, TitleSection, TodosContainer, StyledInput, TaskList, TaskItem, AddButton, AddTaskField, DeleteTaskButton } from './styles';

export default function Home() {
  return (
    <TodosSection>
      <TitleSection>todos</TitleSection>
      <TodosContainer>
        <AddTaskField>
          <StyledInput />
          <AddButton disabled >Add</AddButton>
        </AddTaskField>
        <TaskList>
          <TaskItem>
            <CustomCheckbox labelText='ererddfg dfg dfg d fgf dgfgdfgd dfgdfd' />
            <DeleteTaskButton/>
          </TaskItem>
          <TaskItem>
            <CustomCheckbox labelText='ererddfg dfg dfg d fgf dgfgdfgd dfgdfd' />
          </TaskItem>
          <TaskItem>
            <CustomCheckbox labelText='ererddfg dfg dfg d fgf dgfgdfgd dfgdfd' />
          </TaskItem>
        </TaskList>
      </TodosContainer>
    </TodosSection>
  );
}
