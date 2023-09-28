import React from "react"
import { Link } from "react-router-dom"

function Profile() {
  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">ket8780@gmail.com</div>
          <div className="profile__name">유저</div>
        </div>
      </div>
      <Link to="/" className="profile__layout">
        로그아웃
      </Link>
    </div>
  )
}

export default Profile
