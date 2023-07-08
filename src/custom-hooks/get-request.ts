import { useQuery,QueryFunction} from "react-query"

export const useGetRequest = (key: string | [], queryFunction: QueryFunction<any>, options?:any) => {
    return useQuery<any>(key, queryFunction, {
      enabled: true,
      ...options
    });
  };
  
