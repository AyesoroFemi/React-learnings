import React from "react";
import { Link } from "react-router-dom";

function Post({ blogPost }) {
  return (
    <div>
      {blogPost.map((post) => (
        <div key={post.id}>
          <Link to={post.id.toString()}>
            {" "}
            <h1>{post.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Post;
