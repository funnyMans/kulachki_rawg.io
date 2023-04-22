import styled from 'styled-components';

export const HomePageSC = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  min-width: 70vw;
  align-items: center;
  gap: 3rem;
  > img {
    width: 70%;
    height: auto;
    border-radius: 15px;
    box-shadow: #26394d 0px 20px 30px -10px;
  }
  > div {
    display: flex;
    gap: 2rem;
  }
`;
