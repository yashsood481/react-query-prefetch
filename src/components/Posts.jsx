import { useState } from "react";
import { usePosts } from "../hooks/usePosts";
import Post from "./Post";
import PostPrefetchOnFocus from "./PostPrefetchOnFocus";
import { useQueryClient } from "@tanstack/react-query";

import PostPrefetchOnScroll from "./PostPrefetchOnScroll";
import { prefetchPost } from "../hooks/usePost";

const Posts = ({ selectedCase }) => {
  const queryClient = useQueryClient();
  const { data, isFetching } = usePosts();
  const [visiblePosts, setVisiblePosts] = useState([]);

  const handlePostInView = (postId) => {
    if (!visiblePosts.includes(postId)) {
      prefetchPost(queryClient, postId);
      setVisiblePosts((prev) => [...prev, postId]);
    }
  };
  ``;

  const renderComponent = (id, title, selectedCase) => {
    if (selectedCase === 1) return <Post key={id} id={id} title={title} />;
    if (selectedCase === 2)
      return <PostPrefetchOnFocus key={id} id={id} title={title} />;
    if (selectedCase === 3)
      return (
        <PostPrefetchOnScroll
          key={id}
          id={id}
          title={title}
          onInView={handlePostInView}
        />
      );
  };

  return (
    <div>
      {isFetching && <span>Loading...</span>}
      {!isFetching &&
        data.map(({ id, title }) => {
          return renderComponent(id, title, selectedCase);
        })}
    </div>
  );
};

export default Posts;
