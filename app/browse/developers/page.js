import React from 'react';
import { config } from '@/lib/config';
import PageList from '@/storybook/pages/pageList';

const Developers = () => {
  return (
    <PageList
      queryKey={'developers'}
      url={config.apiPathName.developers}
      queryObj={{}}
    />
  );
};

export default Developers;
