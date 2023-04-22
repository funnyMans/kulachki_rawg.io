import React from 'react';
import { config } from '@/lib/config';
import PageList from '@/storybook/pages/pageList';

const Publishers = () => {
  return (
    <PageList
      queryKey={'publishers'}
      url={config.apiPathName.publishers}
      queryObj={{}}
    />
  );
};

export default Publishers;
