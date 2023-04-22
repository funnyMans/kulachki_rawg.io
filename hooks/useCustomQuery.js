import { config } from '@/lib/config';
import { useQuery } from 'react-query';

export default function useCustomQuery(queryKey, url, queryObj = {}) {
  const queryParams = { ...queryObj, key: config.api.API_KEY };

  const fetchUrl = url + new URLSearchParams(queryParams);

  const {
    data,
    dataUpdatedAt,
    error,
    errorUpdatedAt,
    failureCount,
    failureReason,
    isError,
    isFetched,
    isFetchedAfterMount,
    isFetching,
    isPaused,
    isLoading,
    isLoadingError,
    isPlaceholderData,
    isPreviousData,
    isRefetchError,
    isRefetching,
    isInitialLoading,
    isStale,
    isSuccess,
    refetch,
    remove,
    status,
    fetchStatus,
  } = useQuery(
    [queryKey, queryParams],
    async () => await fetch(fetchUrl).then((result) => result.json())
  );
  return {
    data,
    dataUpdatedAt,
    error,
    errorUpdatedAt,
    failureCount,
    failureReason,
    isError,
    isFetched,
    isFetchedAfterMount,
    isFetching,
    isPaused,
    isLoading,
    isLoadingError,
    isPlaceholderData,
    isPreviousData,
    isRefetchError,
    isRefetching,
    isInitialLoading,
    isStale,
    isSuccess,
    refetch,
    remove,
    status,
    fetchStatus,
  };
}
