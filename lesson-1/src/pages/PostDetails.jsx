import React from "react";
import { useLoaderData } from "react-router-dom";
import { getPost } from "../util/api";

function PostDetails() {
  const postData = useLoaderData();
  console.log(postData);
  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </div>
  );
}

export default PostDetails;

export function loader({ params }) {
  const postId = params.id;
  return getPost(postId);
}
