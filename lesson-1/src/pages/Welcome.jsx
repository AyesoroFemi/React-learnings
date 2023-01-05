import React from "react";
import { json, useLoaderData } from "react-router-dom";
import Post from "../components/Post";
import { getPosts } from "../util/api";

function Welcome() {
  const loaderData = useLoaderData();
  //   console.log(loaderData);
  return (
    <div>
      <div>
        {/* {loaderData.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
          </div>
        ))} */}
        <h1>Welcome</h1>
        <Post blogPost={loaderData} />
      </div>
    </div>
  );
}

export default Welcome;

export function loader() {
  return getPosts();
}
