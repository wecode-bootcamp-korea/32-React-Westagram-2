


import React,{useState} from "react"
import "./Main.scss" 
import Comment from "./Comment.js"


function DaeyoungMain(){


  
// 댓글 쓰는 input 값 
const [list,listSet] = useState('');

// 댓글 목록 란
const[comment,commentC] = useState([]);


// 이벤트가 일어난 곳에 있는 값으로 input값 바꿔서 저장
 function  Listarr(event){


listSet(event.target.value);

 };


//  댓글 목록에 그 전 댓글들도 하나씩 다 추가해서 배열 형태로 만듬
  const addcom = () => {

  commentC([...comment,list]);

  listSet(' ');

 }
  //  map 함수 이용해서 댓글 추가  
// const commentmap = () => {

//   return comment.map( (e , index)  => <li key = {index} > user: {e} </li>)

// };

const enterkey = (e) => {

  if(e.key === 'Enter'){

     addcom();
  };
}


return (
<div>
    <nav>
    <div className="logoleft">
    <img  alt="logo" src="/images/instagram.png" className = "logo" />
    <img  alt="instlogo" src="/images/logotwo.png" className = "logotwo"/>
   </div>
    <div className = "logoright">
       <img alt = "compas" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" className="logothree"/>
       <img alt = "heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" className="logofour"/>
       <img alt = "person" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" className="logofive"/> 
     </div>
    
    <div className="inputbar">
      <img alt = "aa" src="/images/circle.png" className="circle"/>
     <input type = "text" placeholder="검색"/>
   
    </div>
   
   </nav>
   
   <div className="main">
       <div className="feeds">       
         <div className="fd-article">
               <div className = "artname">
                     <img alt="artname" src="/images/user.png"width="100%"/>
               </div>
               <div className = "artpic">
                     <img alt="artpic" src="/images/instapic.png" width="100%"/>
               </div>
               <div className = "artwrite">
                     <img alt="artchat" src="/images/articles.png" width="100%"/>            
               </div>
               <ul className="commentlist"> 
                <Comment Com = {comment} />
   
               </ul>
               <div className ="commentcontainer">
                   <input className = "comment" onChange={Listarr} onKeyPress={enterkey} value = {list} type="text" placeholder="댓글 달기..."/>
                   <button onClick={addcom} className = "bts">게시                
                   </button>
               </div>
               
         </div>
       </div>
   
       <div className ="right">
         
         <div className = "nameright">
             <img alt="jj" src="/images/nameright.png" width="100%"/>
         </div>               
         <div className="story">
             <img alt="jjg" src="/images/story.png" width="100%"/>          
         </div>    
         <div className="recommend">
             <img alt="jqff" src="/images/recommend.png" width="100%"/>
         </div>
         <div className="etc">
             <img alt="jjgghh"src="/images/etc.png" width="100%"/>
         </div>
         
       </div>
       
   
     </div>
   </div>
   
   
   
   

       
       )
};

export default DaeyoungMain;