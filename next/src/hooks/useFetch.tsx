import { useQuery } from 'react-query';

import axios from 'axios';

export const useFetch = (key: string, url: string) => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: [key],
    queryFn: () => axios.get(url).then((res) => res.data)
  });

  return { isLoading, error, data, isFetching };
};
