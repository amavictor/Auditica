import { QueryFunction, useInfiniteQuery } from "react-query";

export const useGetInfiniteRequest = (
    key: string | [],
    queryFunction: QueryFunction<any>,
    options?: any
) => {
    return useInfiniteQuery<any>(key, queryFunction, {
        enabled: true,
        getNextPageParam: (lastPage:number, pages:number) => {
            console.log(lastPage, pages, "Trying to see")
        },
      ...options
    });
  };