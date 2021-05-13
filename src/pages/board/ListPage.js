import React, { useState } from "react";
import "./ListPage.scss";

const ListPage = () => {
  //최초 data - api 요청을 통한 다운로드를 했다고 가정
  const [posts, setPost] = useState([
    { id: 1, title: "제목1", text: "내용1" },
    { id: 2, title: "제목2", text: "내용2" },
    { id: 3, title: "제목3", text: "내용3" },
    { id: 4, title: "제목4", text: "내용4" },
  ]);

  return (
    <div>
      <h1>글 목록 페이지</h1>
      <hr />
      {posts.map((post) => (
        <div className="content">
          <div>
            번호 : {post.id} 제목 : {post.title} {post.text}
          </div>
          <button>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default ListPage;
