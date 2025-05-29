'use client';

import styled from 'styled-components';

export const TodosSection = styled.section`
  padding: 40px 15px;

  @media (min-width: 768px) {
    padding: 60px 20px;
  }
`;

export const TitleSection = styled.h1`
  grid-column: 2/3;
  font-weight: 400;
  font-size: 55px;

  @media (min-width: 768px) {
    font-size: 80px;
  }
`;

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 15px;
  margin: 0 0 30px 0;
  align-items: center;
  justify-items: center;

`;
