'use client';
import { ButtonSC } from '@/storybook/UI_Elements/button/styled';
import { signIn, signOut } from 'next-auth/react';

export function AuthButton({ isAuth }) {
  return (
    <ButtonSC
      variant={isAuth ? 'danger' : 'success'}
      onClick={isAuth ? signOut : signIn}
    >
      {isAuth ? 'Sign Out' : 'Sign In'}
    </ButtonSC>
  );
}
