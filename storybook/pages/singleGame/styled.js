import styled from 'styled-components';

export const SingleGameContentSC = styled.div`
  & {
    position: relative;
    min-height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 2rem;
    align-items: center;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-image: ${(props) => `url(${props.bg})`};
    background-size: cover;
    background-position: center;
  }
  > * {
    position: relative;
  }
`;

export const MetacriticSC = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const PlatformSC = styled.div`
  display: flex;
  flex-direction: column;
  background-image: ${(props) => `url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StoreSC = styled.div`
  display: flex;
  flex-direction: column;
  background-image: ${(props) => `url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const GenreSC = styled.div`
  display: flex;
  flex-direction: column;
  background-image: ${(props) => `url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ContentWrapperSC = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 3rem;
`;

export const GridBoxSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(80px, auto));
  grid-auto-rows: minmax(100px, auto);
  gap: 1rem;
  word-wrap: break-word;
  > div {
    width: 100%;
    height: 100%;
  }
`;
