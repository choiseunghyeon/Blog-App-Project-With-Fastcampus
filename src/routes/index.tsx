import Profile from "components/Profile"
import Home from "pages/home"
import LoginPage from "pages/login"
import PostsPage from "pages/posts"
import Detail from "pages/posts/detail"
import PostEdit from "pages/posts/edit"
import PostNew from "pages/posts/new"
import SignupPage from "pages/signup"
import { Navigate, createBrowserRouter } from "react-router-dom"

export const MAIN_PATH = "/"
export const POST_LIST_PATH = "/posts"
export const POST_DETAIL_PATH = "/post/:id"
export const POST_NEW_PATH = "/posts/new"
export const POST_EDIT_PATH = "/posts/edit"
export const PROFILE_PATH = "/profile"
export const LOGIN_PATH = "/login"
export const SIGN_UP_PATH = "/signup"
export const DEFAULT_PATH = "*"
export const router = createBrowserRouter([
  {
    path: MAIN_PATH,
    element: <Home />,
  },
  {
    path: POST_LIST_PATH,
    element: <PostsPage />,
  },
  {
    path: POST_DETAIL_PATH,
    element: <Detail />,
  },
  {
    path: POST_NEW_PATH,
    element: <PostNew />,
  },
  {
    path: POST_EDIT_PATH,
    element: <PostEdit />,
  },
  {
    path: PROFILE_PATH,
    element: <Profile />,
  },
  {
    path: LOGIN_PATH,
    element: <LoginPage />,
  },
  {
    path: SIGN_UP_PATH,
    element: <SignupPage />,
  },
  {
    path: DEFAULT_PATH,
    element: <Navigate replace to={MAIN_PATH} />,
  },
])
