import styled from 'styled-components';

export const SidebarGroupSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  font-size: 1.5rem;
  gap: 1.3rem;
  transition: all 1s ease;
  > div {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
    text-transform: capitalize;
    transition: all 1s ease-in-out;
  }
`;

export const SidebarGroupBtnSC = styled.div`
  width: fit-content;
  padding: 5px 10px;
  color: #fff;
  border-radius: 10px;
  background-color: #073e75;
  cursor: pointer;
`;

export const SubtitleSC = styled.div`
  h3 {
    transition: 0.5s ease;
    &:hover {
      transform: scale(1.1);
      font-size: 1.5rem;
    }
  }
`;
