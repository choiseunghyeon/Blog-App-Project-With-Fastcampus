import React from "react"
import { Link } from "react-router-dom"
import { POST_DETAIL_PATH, POST_EDIT_PATH } from "routes"

function PostDetail() {
  return (
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">dfsdfgjsdlfjsldkfjsldkfjlsdkfjlsdkfjsdlfkj</div>
        <div className="post__profile-box">
          <div className="post__profile" />
          <div className="post__author-name">패스트캠퍼스</div>
          <div className="post__date">2023.09.28</div>
        </div>
        <div className="post__utils-box">
          <div className="post__delete">삭제</div>
          <div className="post__edit">
            <Link to={`${POST_EDIT_PATH}/1`}>수정</Link>
          </div>
        </div>
        <div className="post__text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
          rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
          rutrum. Aenean imperdi
        </div>
      </div>
    </div>
  )
}

export default PostDetail
