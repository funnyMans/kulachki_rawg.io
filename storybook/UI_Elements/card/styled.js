import styled from 'styled-components';

export const CardInfoSC = styled.div`
  width: 85%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  > div {
    width: 100%;
  }
`;
export const CardTitleSC = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.title};
  margin-bottom: 8px;
`;

export const CardDescriptionSC = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: white;
  transition: all 0.7s ease-in-out;
  opacity: 0;
  > div {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.text};
    > span {
      padding: 3px 0;
      box-shadow: 0 2px 1px -2px wheat;
    }
  }
  > :first-child {
    align-items: start;
  }
  > :last-child {
    align-items: end;
  }
`;

export const CardSliderSC = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.4rem;
  > button {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.3;

    border-radius: 50%;
    border: 2px solid grey;
    background-color: #0f0535;
    transition: 0.5s ease-in-out;
    :hover {
      transform: scale(1.1);
      opacity: 1;
    }
    > span {
      height: fit-content;
      color: white;
      font-size: 16px;
      font-weight: 1000;
    }
  }
  > img {
    border-radius: 10px;
  }
`;

export const CardButtonSC = styled.button`
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
  }
`;

export const CardSC = styled.article`
  width: 15vw;
  min-width: 280px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  text-align: center;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.25);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 1rem;
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  transition: all 0.7s ease-in-out;
  &:hover {
    transform: scale3d(1.3, 1.3, 1.3);
    z-index: 20;
  }

  &:hover ${CardDescriptionSC} {
    opacity: 1;
  }
`;
