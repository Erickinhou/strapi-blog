import Link from "next/link";
import React from "react";

function PostPreview({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="postPreview">
        <h3>{post.attributes.title}</h3>
        <p>{post.attributes.description}</p>
      </div>
    </Link>
  );
}

export default PostPreview;
