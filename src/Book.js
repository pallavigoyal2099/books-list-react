import React from 'react'

const Book=(props)=>{
    // console.log(props);
     const {imgUrl,title,author}=props;
     return (
       <article className="book">
            <img height="150vh" width="250vh" src={imgUrl} alt=""/>
            <h1 onClick={()=>console.log(title)}>{title}</h1>
            <h4 >{author}</h4>
       </article>
     )
   }

export default Book
