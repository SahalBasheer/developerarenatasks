import React, { useState } from "react";
import "./index.css";

export function BlogApp() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    setPosts([{ title, content }, ...posts]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">Simple Blog App</h1>
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write something..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Add Post</button>
      </form>

      <div className="blog-posts">
        {posts.map((post, index) => (
          <div key={index} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
