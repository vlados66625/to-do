import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import { GlobalStyle } from './styles/global-style';

const rubik = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Task-manager',
  description: 'Task Manager for every day',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
