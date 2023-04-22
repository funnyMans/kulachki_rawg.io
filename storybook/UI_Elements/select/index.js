import React, { useState } from 'react';
import { OptionGroupSC, OptionSC, SelectSC, SelectWrapperSC } from './styled';

const Select = ({ name, options, isMulty, changeHandler }) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleChange = (e) => {
    changeHandler(isMulty ? e.target.selectedOptions : e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowOptions(true);
  };
  const handleBlur = (e) => {
    e.preventDefault();
    setShowOptions(false);
  };
  return (
    <SelectWrapperSC>
      <SelectSC
        name={name}
        onChange={handleChange}
        multiple={isMulty}
        onClick={handleClick}
        onBlur={handleBlur}
      >
        {showOptions && (
          <OptionGroupSC>
            {options &&
              options.map((opt) => (
                <OptionSC key={opt.id} value={opt.value || opt.id}>
                  {opt.name || opt.label}
                </OptionSC>
              ))}
          </OptionGroupSC>
        )}
      </SelectSC>
    </SelectWrapperSC>
  );
};

export default Select;
