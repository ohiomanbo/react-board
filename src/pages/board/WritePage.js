import React from "react";

const WritePage = () => {
  const handleWrite = () => {
    // Listpage의 setPosts에 제목, 본문을 담은 object를 넣음
    let post = { id: 5, title: "input값", text: "input값" };
  };

  //type을 버튼으로 바꾸면 submit이 안됨. 내부에서 데이터만 변경할 것이므로 submit을 막음
  return (
    <div>
      <h1>글 쓰기 페이지</h1>
      <hr />
      <form>
        <input type="text" placeholder="제목" />
        <hr />
        <input type="text" placholder="본문" />
        <button type="button" onClick={handleWrite}>
          글 쓰기
        </button>
      </form>
    </div>
  );
};

export default WritePage;
