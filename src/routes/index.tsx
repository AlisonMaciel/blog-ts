import { Routes, Route } from "react-router-dom";
import { Post } from "../page/post";
import { Blog } from "../page/blog";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Blog/>} />
      <Route path="/post/:owner/:repo/issues/:number" element={<Post/>} />

      <Route path="*" element={<Blog/>} />
    </Routes>
  )
}