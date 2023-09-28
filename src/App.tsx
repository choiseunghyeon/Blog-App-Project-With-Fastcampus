import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Route, Routes, Navigate, Link } from "react-router-dom"

function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/posts">Post Link</Link>
      </div>
      <div>
        <Link to="/posts/:id">Post Detail Link</Link>
      </div>
      <div>
        <Link to="/posts/new">Post New Link</Link>
      </div>
      <div>
        <Link to="/posts/edit">Post Edit Link</Link>
      </div>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/posts" element={<h1>Post List Page</h1>} />
        <Route path="/posts/:id" element={<h1>Post Detail Page</h1>} />
        <Route path="/posts/new" element={<h1>Post New Page</h1>} />
        <Route path="/posts/edit" element={<h1>Post Edit Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  )
}

export default App
