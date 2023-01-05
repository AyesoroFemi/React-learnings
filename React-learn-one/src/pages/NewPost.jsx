import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import NewPostForm from "../components/NewPostForm";
import { savePost } from "../utils/api";

function NewPostPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  async function submitHandler(event) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formDate = new FormData(event.target);
      const post = {
        title: formDate.get("title"),
        body: formDate.get("post-text"),
      };
      await savePost(post);
      navigate("/");
    } catch (err) {
      setError(err);
    }
    setIsSubmitting(false);
  }

  function cancelHandler() {
    navigate("/blog");
  }

  return (
    <>
      {error && <p>{error.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        onSubmit={submitHandler}
        submitting={isSubmitting}
      />
    </>
  );
}

export default NewPostPage;
