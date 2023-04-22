import styled from 'styled-components';

export const SwitchSC = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const SwitchSliderSC = styled.span`
  min-width: 60px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const InputSC = styled.input`
  display: none;

  &:checked + ${SwitchSliderSC}:before {
    transform: translateX(26px);
  }

  &:checked + ${SwitchSliderSC} {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
