import React from 'react';
import { GlobalSearchSC } from '../styled';
import { setGlobalSearch } from '@/lib/redux/features/gamelistGlobalSearch/gamelistGlobalSearchSlice';
import { useDispatch } from 'react-redux';

const GlobalSearch = () => {
  const dispatch = useDispatch();
  return (
    <GlobalSearchSC
      type='text'
      placeholder='Search games'
      onChange={(e) => {
        dispatch(setGlobalSearch(e.target.value));
      }}
    />
  );
};

export default GlobalSearch;
