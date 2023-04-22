'use client';

import Link from 'next/link';
import React from 'react';
import { SubtitleSC } from './styled';

const Subtitle = ({ subtitle }) => {
  return (
    <SubtitleSC>
      <Link href={subtitle.route}>
        <span>{subtitle.icon}</span>
        <h3>{subtitle.text}</h3>
      </Link>
    </SubtitleSC>
  );
};

export default Subtitle;
