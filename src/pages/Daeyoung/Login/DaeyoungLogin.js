
import React , {useState} from "react"
import "./DaeyoungLogin.scss" ;

// import { useNavigate } from "react-router-dom";
// import {Link} from "react-router-dom";


function DaeyoungLogin(){

// const navigate = useNavigate();

// const goTomain = () =>{
    // navigate("/main");
// }


const [idvalue,setid] = useState('');
const [pwvalue,setpw] = useState('');
const [btvalue,on] = useState(true);


function handleIdInput(event){

             setid(event.target.value);
        // console.log(value,event.target.value)
};

function handlePwInput(event){

            setpw(event.target.value);
        // console.log(valuea,event.target.value)
    };

 const Isactive = () => {

    idvalue.includes('@') && (pwvalue.length>5) ? on(false) : on(true);

 };
return (
<div>
<div className = "lgpage">        
<div className = "login">

    <div className = "instalogo">
        westagram
    </div>
    
    <div className = "login-container">

        <input id= "logid" 
            onChange={handleIdInput} 
            onKeyUp={Isactive} 
            type = "text"
            placeholder="전화번호, 사용자 이름 또는 이메일"/>

        <input id = "logpw" 
            onChange={handlePwInput} 
            onKeyUp={Isactive} 
            type= "password" 
            placeholder="비밀번호"/>

        <button 
            disabled={btvalue} 
            className = 
                {btvalue ? "loginbt" : "activebt"}>
    
            로그인</button>


        {/* <button className ="gomain" onClick={goTomain}>메인으로</button> */}
        {/* <Link to="/main">main으로</Link> */}

    </div>

</div>
<div className = "forgetpw">
 비밀번호를 잊으셨나요?
</div>

    <script src="index.js"></script>
 </div>   
 
 </div>)
};






 export default DaeYoungLogin;
