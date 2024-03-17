import { useQuery } from "react-query";
import { getQueryKey } from "@/utils/queries/getQueryKey";
import { ResourceTypes } from "@/utils/queries/types";
import { axiosInstance } from "@/api/api.utils";

export function useGetMovies() {
  return useQuery({
    queryKey: getQueryKey({ type: ResourceTypes.MOVIES }),
    queryFn: () =>
      axiosInstance.get("/discover/movie").then((response) => response.data),
  });
}
