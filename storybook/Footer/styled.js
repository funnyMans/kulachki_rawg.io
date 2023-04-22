import styled from 'styled-components';

export const FooterContainerSC = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.baseColor};
  padding: 20px;
  gap: 2rem;
  > p {
    text-align: center;
  }
`;

export const FooterTitleSC = styled.h3`
  font-size: 1.5rem;
`;

export const FooterLinksContainerSC = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2rem;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const FooterLinkSC = styled.div`
  transition: all 0.3s ease-in-out;
  > a {
    color: #555;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      color: #0b7280;
      transform: scale(1.3);
    }
  }
  &:hover {
    transform: scale(1.1);
  }
`;
