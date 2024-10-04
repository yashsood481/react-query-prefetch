import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../lib/api";

export const usePost = (id, enabled) => {
  const { data, isFetching, isError } = useQuery({
    queryKey: ["posts", id],
    refetchOnWindowFocus: false,
    queryFn: () => getPostById(id),
    enabled: enabled,
  });
  return { data, isFetching, isError };
};

export const prefetchPost = (client, id) => {
  client.prefetchQuery({
    queryKey: ["posts", id],
    refetchOnWindowFocus: false,
    queryFn: () => getPostById(id),
  });
};
