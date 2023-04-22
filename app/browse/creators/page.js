import React from 'react';
import { config } from '@/lib/config';
import PageList from '@/storybook/pages/pageList';

const Creators = () => {
  return (
    <PageList
      queryKey={'creators'}
      url={config.apiPathName.creators}
      queryObj={{}}
    />
  );
};

export default Creators;
