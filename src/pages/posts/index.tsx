import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PostList from "../../components/PostList"

function PostsPage() {
  return (
    <>
      <Header />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  )
}

export default PostsPage
