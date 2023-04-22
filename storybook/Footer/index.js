'use client';
import React from 'react';
import Link from 'next/link';

import {
  FooterContainerSC,
  FooterLinkSC,
  FooterLinksContainerSC,
  FooterTitleSC,
} from './styled';

const Footer = () => {
  return (
    <FooterContainerSC>
      <FooterTitleSC>Stay Connected</FooterTitleSC>
      <FooterLinksContainerSC>
        <FooterLinkSC>
          <Link href='#'>Facebook</Link>
        </FooterLinkSC>
        <FooterLinkSC>
          <Link href='#'>Twitter</Link>
        </FooterLinkSC>
        <FooterLinkSC>
          <Link href='#'>Instagram</Link>
        </FooterLinkSC>
        <FooterLinkSC>
          <Link href='#'>LinkedIn</Link>
        </FooterLinkSC>
      </FooterLinksContainerSC>
      <p>&copy; 2023 My Company. All rights reserved.</p>
    </FooterContainerSC>
  );
};

export default Footer;
