import './Main.css';
import Title from '../Title/Title';
import MenuBar from '../MenuBar/MenuBar';
import mainImg from '../../img/main.jpeg';
function Main(){
    // console.log(sessionStorage.getItem('user_Email'));
    return(
        <div>
            <Title title="메인페이지" />
            <img id="mainImg" src={mainImg}/>
            <MenuBar />
        </div>
        
    )
}

export default Main;