import styled from 'styled-components';

export const GlobalFilterSC = styled.div`
  grid-column: 2;
  position: relative;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  z-index: 1;
  > form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-around;
    > div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
