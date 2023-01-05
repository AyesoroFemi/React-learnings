import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import { savePost } from "../util/api";

function BlogPost() {
  const data = useActionData();
  return (
    <Form method="post" action="/">
      <input
        type="text"
        id="text"
        name="title"
        required
        minLength={5}
        placeholder="title"
      />
      <textarea
        name="post-text"
        id="text"
        required
        cols="30"
        rows="10"
      ></textarea>
      <button>submit</button>
    </Form>
  );
}

export default BlogPost;

export async function action({ request }) {
  const formData = await request.formData();
  console.log(formData);
  const post = {
    title: formData.get("title"),
    body: formData.get("post-text"),
  };
  try {
    await savePost(post);
  } catch (err) {
    if (err.status === 422) {
      throw err;
    }
    throw err;
  }
  return redirect("/");
}
