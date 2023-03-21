import { useQuery,QueryFunction } from "react-query"

export const useGetRequest = (key: string, queryFunction: QueryFunction<any>) => {
    return useQuery<any>(key, queryFunction, {
      enabled: true,
    });
  };
  