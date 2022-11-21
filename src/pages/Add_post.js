import "../components/Header/Header.js";
import Header from "../components/Header/Header.js";
import Input_box from "../components/Input_box/Input_box";
import Btn_2 from "../components/Btn_2/Btn_2";
import Board_list from "../components/Board_list/Board_list.js";
import Board_lists from "./Board_lists.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add_post(props) {
  const [postTitle, setPostTitle] = useState("");
  const navigate = useNavigate();

  const onChange = (event) => {
    setPostTitle(event.target.value);
    console.log(postTitle);
  };
  const post = (event) => {
    console.log("여기에 포스트 통신 코드를 쓸거다");
  };
  const onClick = () => {
    console.log("등록버튼 눌렀다");
    post();
    navigate("/board_list");
    alert("게시글이 등록되었습니다!");
  };

  return (
    <div>
      {/* <Board_lists postTitles={postTitles}></Board_lists> */}

      <div className="display">
        <Header title="글 작성" />
        <div className="display_container">
          <Input_box
            onChange={onChange}
            onClick={onClick}
            value={postTitle}
            input_title="제목"
            height="30px"
            place_holder="제목을 입력하세요."
          />

          <Input_box
            input_title="내용"
            height="300px"
            place_holder="내용을 입력하세요."
          />

          <Btn_2 btn1="목록" btn2="등록" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

export default Add_post;
