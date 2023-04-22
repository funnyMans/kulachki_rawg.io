import React from 'react';
import { config } from '@/lib/config';
import PageList from '@/storybook/pages/pageList';

const Genres = () => {
  return (
    <PageList
      queryKey={'genres'}
      url={config.apiPathName.genres}
      queryObj={{}}
    />
  );
};

export default Genres;
