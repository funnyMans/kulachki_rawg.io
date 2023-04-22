import styled from 'styled-components';
import css from 'styled-jsx/css';

export const SelectWrapperSC = styled.div`
  position: relative;
  display: inline-block;
  width: 250px;
  font-size: 16px;
  color: #555;
`;

export const SelectSC = styled.select`
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #f8f8f8;
  color: #555;
  font-size: 16px;
  appearance: none;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #eee;
  }
`;

export const OptionGroupSC = styled.optgroup`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  max-height: 200px;
  z-index: 1;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;

export const OptionSC = styled.option`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
  ${({ selected }) =>
    selected &&
    css`
      background-color: #f0f0f0;
    `}
`;
