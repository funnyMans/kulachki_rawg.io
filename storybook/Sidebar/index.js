'use client';

import React from 'react';
import Link from 'next/link';

import { SidebarSC } from './styled';
import ThemeSwitch from './themeSwitch';
import SideBarGroup from './sideBarGroup';

import { sidebarGroupList } from '@/mock/sidebarGroupList.js';

const Sidebar = () => {
  return (
    <SidebarSC>
      <ThemeSwitch />
      <h2>
        <Link href='/planets'>Planets</Link>
      </h2>
      {sidebarGroupList.map((group) => (
        <SideBarGroup key={group.id} group={group} />
      ))}
    </SidebarSC>
  );
};

export default Sidebar;
