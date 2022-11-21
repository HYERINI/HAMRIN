import Header from "../components/Header/Header.js";
import Btn from "../components/Btn/Btn.js";
import Board_header from "../components/Board_header/Board_header";
import Board_list from "../components/Board_list/Board_list.js";
import Pagination from "react-js-pagination"; //API
import Pagination_box from "../components/Pagination_box/Pagination_box.js";
import Add_post from "./Add_post.js";

function Board_lists({ postTitles }) {
  console.log(Array.isArray(postTitles));
  return (
    <div>
      <div className="display">
        <Header title="게시판" />
        <div className="display_container">
          <Btn btn_txt="글 작성" url="/add_post" />

          <Board_header t1="번호" t2="제목" t3="글쓴이" />
          <ul>
            {Array.isArray(postTitles)
              ? postTitles.map((item, index) => (
                  <li key={index}>
                    <Board_list num={index + 1} title={item} name="옥채현" />
                  </li>
                ))
              : "등록된 글이 없습니다"}
          </ul>
          <Pagination_box />
        </div>
      </div>
    </div>
  );
}

export default Board_lists;
