import axios from "axios";
import React from "react";
import AllPosts from "../../components/AllPosts";

function Posts({ posts }) {
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
}

export default Posts;

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:1337/api/posts");
  return {
    props: {
      posts: data.data,
    },
  };
}
