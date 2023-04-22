import React from 'react';
import { config } from '@/lib/config';
import PageList from '@/storybook/pages/pageList';

const Tags = () => {
  return (
    <PageList queryKey={'tags'} url={config.apiPathName.tags} queryObj={{}} />
  );
};

export default Tags;
