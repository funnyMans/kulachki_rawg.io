'use client';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import Authorize from '@/storybook/Authorization';
import { UserImageSC } from './styled';

const UserQuickMenu = () => {
  const { data } = useSession();

  return data?.user ? (
    <>
      <UserImageSC>
        <Image
          src={data?.user.image}
          alt='user'
          loading='lazy'
          width={50}
          height={50}
        />
      </UserImageSC>
      <span>{data?.user.name}</span>
      <Authorize isAuth={data?.user} />
    </>
  ) : (
    <Authorize isAuth={data?.user} />
  );
};

export default UserQuickMenu;
