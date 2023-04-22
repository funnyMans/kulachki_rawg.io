'use client';

import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useInfiniteQuery } from 'react-query';

import { selectGamelistOrder } from '@/lib/redux/features/gamelistOrder/gamelistOrderSlice';
import { selectGamelistFilters } from '@/lib/redux/features/gamelistFilters/gamelistFiltersSlice';
import { selectGamelistGlobalSearch } from '@/lib/redux/features/gamelistGlobalSearch/gamelistGlobalSearchSlice';

export const UseInfiniteQueryGames = (queryKey, url, queryObj) => {
  const ordering = useSelector(selectGamelistOrder);
  const filters = useSelector(selectGamelistFilters);
  const searchField = useSelector(selectGamelistGlobalSearch);

  const queryParams = {
    ...queryObj,
    ...filters,
    ordering,
    search: searchField,
  };
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    [queryKey, queryParams],
    async ({ pageParam = 1 }) => {
      const fetchUrl =
        url + new URLSearchParams({ ...queryParams, page: pageParam });
      return await fetch(fetchUrl).then((result) => result.json());
    },

    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.next) {
          return pages.length + 1;
        }
      },
    }
  );

  return {
    data,
    status,
    fetchNextPage,
    hasNextPage,
  };
};
