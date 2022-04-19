import React from 'react'


function Comment (props) {


const Commap = (props.Com).map( (e ,index) => <li key = {index} > user: {e} </li> )



    return (
        
        <div> 
            {Commap}

      {/* props.map( (e,index) => <li key = {index} > user: {e} </li> ) */}
      {/* 이렇게 하면 map이 안읽히네  */}
    














    </div>
    ) 
  };




export default Comment;