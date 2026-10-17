import { createPost } from "../services/Api";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    
  const navigate = useNavigate();

  const [post, setpost] = useState({ title: "", content: "", author: "" });
  const [error, setError] = useState(null);
  const [submitting, setsubmitting] = useState(false);

  const handleChange = (event) => {
  const { name, value } = event.target;
  setpost((currentPost) => ({ ...currentPost, [name]: value }));
  setError(null);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!post.title.trim() || !post.content.trim() || !post.author.trim()) {
      setError("all fields are required");
      return;
    }
    try {
      setsubmitting(true);
      await createPost(post);
      navigate("/");
    } catch {
      setError("Failed to create post");
    } finally {
      setsubmitting(false);
    }
  };

  return (
    <>
    <div className="page">
      <h1>Create post component</h1>
        { error && (<p>{error}</p>)}
      <div className="post-form">
        <form onSubmit={handleSubmit}>
          <h2>Create New Post here</h2>

          <div>
            <label> Title : </label>
            <input
              type="text"
              name="title"
              placeholder="Enter your post title"
              onChange={handleChange}
            />
          </div>

          <div>
            <label> Content : </label>
            <input
              type="text"
              name="content"
              placeholder="Enter your post content"
              onChange={handleChange}
            />
          </div>

          <div>
            <label> Author : </label>
            <input
              type="text"
              name="author"
              placeholder="Enter your post Author"
              onChange={handleChange}
            />
          </div>

<button type="submit">
{
    submitting? "Publishing...." : "publish Post"
}
</button>

        </form>
      </div>
      </div>
    </>
  );
};

export default CreatePost;
