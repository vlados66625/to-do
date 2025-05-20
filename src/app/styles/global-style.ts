'use client';

import { createGlobalStyle } from 'styled-components';
import { colorGraniteGrey, colorWhiteSmoke } from '../../const/const-colors';

export const GlobalStyle = createGlobalStyle`

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  font-family: var(--font-rubik-sans);
  margin: 0;
  color: ${colorGraniteGrey};
  background: ${colorWhiteSmoke};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}
`;
