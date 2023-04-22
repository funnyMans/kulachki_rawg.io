'use client';

import React from 'react';
import { HeaderSC } from './styled';
import GlobalSearch from './GlobalSearch';
import UserQuickMenu from './UserQuickMenu';
import Logo from './Logo';

const Header = () => {
  return (
    <HeaderSC>
      <Logo />
      <GlobalSearch />
      <UserQuickMenu />
    </HeaderSC>
  );
};

export default Header;
