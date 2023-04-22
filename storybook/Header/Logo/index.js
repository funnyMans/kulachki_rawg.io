import React from 'react';
import { LogoSC } from '../styled';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <LogoSC>
      <Link href={'/'}>
        <Image
          src={'/assets/logo2.png'}
          width={100}
          height={50}
          alt='logo'
          priority
        />
      </Link>
    </LogoSC>
  );
};

export default Logo;
