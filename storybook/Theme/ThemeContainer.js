'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { theme } from './themeSettings';
import { selectGlobalTheme } from '@/lib/redux/features/globalTheme/globalThemeSlice';

const ThemeContainer = ({ children }) => {
  const globalTheme = useSelector(selectGlobalTheme);

  return <ThemeProvider theme={theme[globalTheme]}>{children}</ThemeProvider>;
};

export default ThemeContainer;
