import "../components/Header/Header.js";
import Header from "../components/Header/Header.js";
import Input_box from "../components/Input_box/Input_box";
import Category_btn from "../components/Category_btn/Category_btn";
import Category_tab from "../components/Category_tab/Category_tab";

function Test() {
  return (
    <div>
      <div className="display">
        <Header title="답변 작성" />
        <div className="display_container">
          <Input_box
            input_title="답변 작성하기"
            height="200px"
            place_holder="답변을 작성해주세요."
          />
          <Input_box
            input_title="답변 작성하기"
            height="100px"
            place_holder="답변을 작성해주세요."
          />
          <Category_btn />
          <Category_tab />
        </div>
      </div>
    </div>
  );
}

export default Test;


// import Header from "../components/Header/Header.js";

// function Test() {
//   return (
//     <div>
//       <div className="display">
//         <Header title="내가 작성한 글" />
//         <div className="display_container">
          

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;