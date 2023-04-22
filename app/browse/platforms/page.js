import React from 'react';
import { config } from '@/lib/config';
import PageList from '@/storybook/pages/pageList';

const Platforms = () => {
  return (
    <PageList
      queryKey={'platforms'}
      url={config.apiPathName.platforms}
      queryObj={{}}
    />
  );
};

export default Platforms;
