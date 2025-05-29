'use client';
import { ThemeBtn } from './styles';
import { useTheme } from '../context-provider/context-provider';

export default function ThemeButton() {
  const { toggleTheme } = useTheme();

  return <ThemeBtn onClick={toggleTheme}>Сменить тему</ThemeBtn>;
}
