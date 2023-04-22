import styled from 'styled-components';

export const ButtonSC = styled.button`
  background-color: ${(props) => props.theme.colors[props.variant]};
  border: none;
  color: ${(props) => props.theme.colors.powderWhite};
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: #00000077 0px 2px 4px, #0000004c 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
