import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../lib/api";

export const usePosts = () => {
  const { data, isFetching, isError } = useQuery({
    queryKey: ["posts"],
    refetchOnWindowFocus: false,
    queryFn: getAllPosts,
  });
  return { data, isFetching, isError };
};
