import React, { useEffect, useState } from "react";
import PostPreview from "./PostPreview";

function AllPosts({ posts }) {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(posts.slice(0, 5));
  }, [posts]);

  function renderPostPreviews() {
    return latestPosts.map((post) => {
      return <PostPreview post={post} key={post.id} />;
    });
  }

  return (
    <>
      <h2>Posts</h2>
      {renderPostPreviews()}
    </>
  );
}

export default AllPosts;