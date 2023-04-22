'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { MainSC } from './styled';
import { GlobalFilter } from '../GlobalFilter.js';

const Main = ({ children }) => {
  const path = usePathname();
  return (
    <MainSC>
      {children}
      {path === '/catalog' && <GlobalFilter />}
    </MainSC>
  );
};

export default Main;
