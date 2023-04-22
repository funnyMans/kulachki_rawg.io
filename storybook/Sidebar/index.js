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
      <Link href='/planets'>
        <h2>Planents</h2>
      </Link>
      {sidebarGroupList.map((group) => (
        <SideBarGroup key={group.id} group={group} />
      ))}
    </SidebarSC>
  );
};

export default Sidebar;
