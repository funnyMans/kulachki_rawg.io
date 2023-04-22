import styled from 'styled-components';

export const ListSC = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > li {
    display: flex;
    gap: 1rem;
  }
`;

export const CardListSC = styled.div`
  display: flex;
  position: relative;
  z-index: 5;
`;
