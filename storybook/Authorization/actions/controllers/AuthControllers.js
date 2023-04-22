'use client';
import React from 'react';
import { AuthButton } from '..';

const AuthControllers = ({ isAuth }) => {
  return (
    <div>
      <AuthButton isAuth={isAuth} />
    </div>
  );
};

export default AuthControllers;
