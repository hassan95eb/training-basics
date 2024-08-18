import React, { useEffect, useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState(true);
  function userAction(type, playLoad) {
    switch (type) {
      case "get-post-id":
        setTitle(playLoad);
        setLoading(false);
        break;
      case "change-post-id":
        setLoading(true);
        setPostId(playLoad);
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((post) => {
        userAction("get-post-id", post.title);
      });
  }, [postId]);
  function loadingFunc(e) {
    userAction("change-post-id", e.target.value);
  }
  return (
    <>
      <div>
        <label htmlFor="">post Id:</label>
        <input type="number" onChange={loadingFunc} value={postId} />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        {loading ? (
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <div> {title}</div>
        )}
      </div>
    </>
  );
}
