import { TodosSection, TitleSection } from './styles';
import TodoApp from './components/todo-app/todo-app';

export default function Home() {
  return (
    <TodosSection>
      <TitleSection>todos</TitleSection>
      <TodoApp />
    </TodosSection>
  );
}
