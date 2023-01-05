import React from "react";

function NewPostForm() {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required minLength={5} />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Post Text</label>
        <textarea name="post-text" id="text" rows={5} minLength={10}></textarea>
        <button type="button" onClick={onCancel} disabled={submitting}>
          Cancel
        </button>
        <button disabled={submitting}>
          {submitting ? "Submitting..." : "Create Post"}
        </button>
      </fieldset>
    </form>
  );
}

export default NewPostForm;
