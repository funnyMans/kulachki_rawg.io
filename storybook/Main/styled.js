import styled from 'styled-components';

export const MainSC = styled.main`
  grid-area: main;
  display: grid;
  justify-content: space-between;
  grid-template-columns: minmax(calc(700px, 3fr), fill) minmax(0, 1fr);
  padding: 1rem 1rem;
  gap: 1rem;
  @media (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap-reverse;
  }
`;
