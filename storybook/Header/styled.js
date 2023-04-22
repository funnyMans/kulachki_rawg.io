import styled from 'styled-components';

export const HeaderSC = styled.header`
  position: sticky;
  margin-bottom: 1rem;
  top: 0;
  height: 10vh;
  grid-area: header;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 1s ease-in-out;
  box-shadow: 0 4px 2px -2px gray;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 1;
  & :hover {
  }

  @media (max-width: 700px) {
    > span {
      display: none;
    }
  }
`;

export const LogoSC = styled.div`
  width: fit-content;
`;

export const GlobalSearchSC = styled.input`
  max-width: 70%;
  min-width: 50%;
  max-height: 80%;
  min-height: 70%;
  padding: 20px;
  font-size: 1.3rem;
  opacity: 0.7;
  border-radius: 50px;
  border: none;
  outline: none;
  list-style: none;
  background-color: ${(props) => props.theme.colors.mainGray};
  transition: box-shadow 1s;
  &:focus {
    box-shadow: inset 0 0 5px 5px #50e693;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SignUpButtonSC = styled.button`
  max-width: 70%;
`;
