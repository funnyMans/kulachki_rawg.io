'use client';
import React, { useState } from 'react';
import { InputSC, SwitchSC, SwitchSliderSC } from './styled';

const Switcher = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleSwitcherClick = (e) => {
    setIsChecked(!isChecked);
    onClick(!isChecked);
  };

  return (
    <SwitchSC>
      <InputSC type='checkbox' onClick={handleSwitcherClick} defaultChecked />
      <SwitchSliderSC />
    </SwitchSC>
  );
};

export default Switcher;
