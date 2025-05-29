'use client';

import styled from 'styled-components';

export const ThemeBtn = styled.button`
  position: relative;
  grid-column: 3/4;
  padding: 8px 35px 8px 8px;
  color: ${(props) => props.theme.textColor};
  background: inherit;
  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 8px;
  font-size: 10px;

  @media (min-width: 768px) {
    font-size: 13px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 31px;
    height: 31px;
    background: ${(props) => props.theme.iconThemeButton};
    background-size: 25px 25px;
    transform: translateY(-50%);

    @media (min-width: 768px) {
      font-size: 80px;
    }
  }
`;
