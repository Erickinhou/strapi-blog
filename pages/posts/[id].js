import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function PostPage({ post }) {
  console.log("data on component -> ", post.attributes.content);
  return (
    <>
      <div>
        <h1>{post.attributes.title}</h1>
        <h2>{post.attributes.description}</h2>
        <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
      </div>
    </>
  );
}

export default PostPage;

export async function getStaticPaths() {
  const { data } = await axios.get("http://localhost:1337/api/posts");
  const paths = data.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(
    `http://localhost:1337/api/posts/${params.id}`
  );

  return {
    props: {
      post: data.data,
    },
  };
}
