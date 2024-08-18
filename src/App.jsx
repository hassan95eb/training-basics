import React, { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState(true);
  return <div>App</div>;
}
