'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { HomePageSC } from './styled';
import { ButtonSC } from '@/storybook/UI_Elements/button/styled';

import rawg from '../../../public/assets/rawg.jpeg';

const HomePage = () => {
  return (
    <HomePageSC>
      <Image src={rawg} alt='rawg' priority />
      <div>
        <ButtonSC variant={'primary'}>
          <Link href={'/catalog'}>See all</Link>
        </ButtonSC>
        <ButtonSC variant={'secondary'}>
          <Link href={'https://rawg.io'} target='_blank'>
            Go to oficcial
          </Link>
        </ButtonSC>
      </div>
    </HomePageSC>
  );
};

export default HomePage;
