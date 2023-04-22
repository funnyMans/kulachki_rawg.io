'use client';
import React from 'react';

import useCustomQuery from '@/hooks/useCustomQuery';
import List from '@/storybook/UI_Elements/list/List';

const PageList = ({ queryKey, url, queryObj }) => {
  const { data } = useCustomQuery(queryKey, url, queryObj);
  return <List list={data?.results} />;
};

export default PageList;
