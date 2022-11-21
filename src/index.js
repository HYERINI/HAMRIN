import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modify_post from "./pages/Modify_post";
import Add_post from "./pages/Add_post";
import Board_lists from "./pages/Board_lists";
import Notice_board from "./pages/Notice_board";
import Post_answer from "./pages/Post_answer";
import Test from "./pages/Test";
import Apply_service_select_date from "./pages/line2/Apply_service_select_date";
import Apply_signup_list from "./pages/Apply_signup_list";
import Question_list from "./pages/Question_list";
import Add_notice from "./pages/Add_notice";
import "./styles/common.scss";
// line1 로그인페이지
import Login1 from "./pages/line1/Login1";
import Login2 from "./pages/line1/Login2";
import Login3 from "./pages/line1/Login3";
import Login4 from "./pages/line1/Login4";
import Login5 from "./pages/line1/Login5";
import Login6 from "./pages/line1/Login6";
// line2
import Home from "./pages/line2/home";
import Apply_service from "./pages/line2/Apply_service";
import Mypage1 from "./pages/line2/Mypage1";
import Mypage2 from "./pages/line2/Mypage2";
import My_post_list from "./pages/line2/My_post_list";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/board_list" element={<Board_lists />}></Route>
      <Route path="/add_post" element={<Add_post />}></Route>
      <Route path="/notice_board" element={<Notice_board />}></Route>
      <Route path="/add_notice" element={<Add_notice />}></Route>
      <Route path="/question_list" element={<Question_list />}></Route>
      <Route path="/apply_signup_list" element={<Apply_signup_list />}></Route>

      {/* line1 로그인 페이지 */}
      <Route path="/login1" element={<Login1 />}></Route>
      <Route path="/login2" element={<Login2 />}></Route>
      <Route path="/login3" element={<Login3 />}></Route>
      <Route path="/login4" element={<Login4 />}></Route>
      <Route path="/login5" element={<Login5 />}></Route>
      <Route path="/login6" element={<Login6 />}></Route>
      {/* line2 */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/apply_service" element={<Apply_service />}></Route>
      <Route
        path="/apply_service_select_date"
        element={<Apply_service_select_date />}
      ></Route>
      <Route path="/mypage1" element={<Mypage1 />}></Route>
      <Route path="/mypage2" element={<Mypage2 />}></Route>
      <Route path="/my_post_list" element={<My_post_list />}></Route>

      {/* // <div>
  
  //   //<Modify_post />
  //  // <Post_answer />
  //   <Apply_service_select_date />
  
  
 
  // </div> */}
    </Routes>
  </Router>
);
