import React from 'react';
import { config } from '@/lib/config';
import PageList from '@/storybook/pages/pageList';

const Stores = () => {
  return (
    <PageList
      queryKey={'stores'}
      url={config.apiPathName.stores}
      queryObj={{}}
    />
  );
};

export default Stores;
