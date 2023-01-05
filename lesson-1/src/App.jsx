// import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import BlogPost, { action as newPostAction } from "./pages/BlogPost";
import PostDetails, { loader as blogPost } from "./pages/PostDetails";
import Welcome, { loader as BlogLoader } from "./pages/Welcome";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={<Welcome />}
        loader={BlogLoader}
        errorElement={<p>An error occurred!</p>}
      />
      <Route path=":id" element={<PostDetails />} loader={blogPost} />
      <Route path="/create" element={<BlogPost />} action={newPostAction} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
