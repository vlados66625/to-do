import { TodosSection, TitleSection, TitleContainer } from './styles';
import TodoApp from './components/todo-app/todo-app';
import ThemeButton from './components/theme-button/theme-button';

export default function Home() {
  return (
    <TodosSection>
      <TitleContainer>
        <TitleSection>todos</TitleSection>
        <ThemeButton />
      </TitleContainer>
      <TodoApp />
    </TodosSection>
  );
}
