import React from "react";
import { Outlet } from "react-router-dom";
import BlogActions from "../components/BlogAction";

function BlogLayout() {
  return (
    <>
      <BlogActions />
      <Outlet />
    </>
  );
}

export default BlogLayout;
