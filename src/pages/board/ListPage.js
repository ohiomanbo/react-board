import React, { useRef, useState } from "react";
import "./ListPage.scss";

const ListPage = () => {
  const [id, setId] = useState(5);
  const [post, setPost] = useState({
    id: "",
    title: "",
    content: "",
  });
  /*
  const handleChangeTitle = (e) => {
    //    console.log(e); // e.target.value를 살펴보면 이벤트는 발생하는데 공백임(데이터가 안들어옴) -> setPost를 통해 데이터 들어오도록 구현
    setPost({ title: e.target.value }); // 나는 그냥 e.target.value를 set했었음 -> 그러면 post 자체 값은 입력한대로 나오는데, post.id/title/content 값은 undefined임
  };

  const handleChangeContent = (e) => {
    setPost({ content: e.target.value });
  };
  //위 두 함수의 단점은 input 갯수에 따라 함수를 계속 만들어 줘야됨 -> 하나의 함수로 처리
  // input 태그에 name이라는 속성을 하나 더 추가해서 공통적으로 불러 올 수 있도록 함 -> computed property name 사용하기 위함
*/
  const handleForm = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value }); // computed property name이라고 배열로 감싸면 key값으로 들어감(동적으로 키값 할당 가능). 기존값유지하려고 ...post
  };

  //최초 data - api 요청을 통한 다운로드를 했다고 가정
  const [posts, setPosts] = useState([
    { id: 1, title: "제목1", content: "내용1" },
    { id: 2, title: "제목2", content: "내용2" },
    { id: 3, title: "제목3", content: "내용3" },
    { id: 4, title: "제목4", content: "내용4" },
  ]);

  const handleWrite = (e) => {
    e.preventDefault(); // form tag가 하려는 액션을 중지시켜야함. <- Button의 type을 button으로 안하고 submit으로 할 경우, form 태그에 onSubmit 함수 걸어주고 새로고침 방지 시키면 됨
    // Listpage의 setPosts에 제목, 본문을 담은 object를 넣음
    console.log("post before change id", post);
    setPost({ ...post, id: id }); // 왜 첫 호출 때 안들어가지??
    console.log("post after change id", post);
    setId((prev) => prev + 1);

    setPosts([...posts, post]);
  };

  // 화면에서 글을 쓸 때, value로써 값은 들어가는데 setPost가 아니므로 새로 렌더링은 하지 않음 -> 인풋값 입력이 안됨, 강제로 글을 넣을 수가 없음 -> ref를 쓰기도 애매해서, onchange 함수를 추가해줌
  return (
    <div>
      <h1>{id}</h1>
      <h1>글 목록 페이지</h1>
      <h1>글 쓰기 페이지</h1>
      <hr />
      <form onSubmit={handleWrite}>
        <input
          type="text"
          placeholder="제목"
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <hr />
        <input
          type="text"
          placeholder="본문"
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="submit">글 쓰기</button>
      </form>
      <hr />
      {posts.map((post) => (
        <div className="content">
          <div>
            번호 : {post.id} 제목 : {post.title} 내용 : {post.content}
          </div>
          <button>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default ListPage;
