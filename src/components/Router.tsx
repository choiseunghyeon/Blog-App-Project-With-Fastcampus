import React from "react"
import { Route, Routes, Navigate, Link } from "react-router-dom"
import Home from "../pages/home"
import Posts from "../pages/posts"
import Detail from "../pages/posts/detail"
import PostNew from "../pages/posts/new"
import PostEdit from "../pages/posts/edit"
import Profile from "../pages/profile"
import LoginPage from "../pages/login"
import SignupPage from "../pages/signup"
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Detail />} />
      <Route path="/posts/new" element={<PostNew />} />
      <Route path="/posts/edit" element={<PostEdit />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default Router