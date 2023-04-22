import styled from 'styled-components';

export const AppContainerSC = styled.div`
  > div {
    position: relative;
    min-height: 100vh;
    max-height: 100%;
    display: grid;
    grid-template-areas:
      '. header header .'
      '. nav  main .'
      '. footer  footer .';
    grid-template-columns: 1fr 2fr 13fr 1fr;
    grid-template-rows: repeat(3, autofit);
    background-color: ${(props) => props.theme.colors.baseColor};
    color: #fff;
    @media (max-width: 1000px) {
      grid-template-columns: 2fr 13fr;

      grid-template-areas:
        'header header'
        'nav  main'
        'footer  footer';
    }
    @media (max-width: 700px) {
      grid-template-columns: auto;
      grid-template-rows: auto;

      grid-template-areas:
        'header'
        'nav'
        'main'
        'footer';
    }
  }
`;
