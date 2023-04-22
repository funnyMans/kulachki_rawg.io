'use client';

import { setGlobalTheme } from '@/lib/redux/features/globalTheme/globalThemeSlice';
import Switcher from '@/storybook/UI_Elements/switcher';
import React from 'react';
import { useDispatch } from 'react-redux';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const handleThemeSwitch = (value) => {
    dispatch(setGlobalTheme(value ? 'dark' : 'light'));
  };
  return <Switcher onClick={handleThemeSwitch} />;
};

export default ThemeSwitch;
