import {deletePost, getPosts } from "../services/Api";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setposts] = useState([]);

  const [loading, setloading] = useState(false);

  const [error, seterror] = useState(null);

  const loadPosts = async () => {
    try {
      setloading(true);
      const res = await getPosts();
      setposts(res.data);
    } catch (error) {
      seterror("Failed to load post..");
    } finally {
      setloading(false);
    }
  };


const handleDelete= async (id)=>{
    if(!window.confirm("Are you sure you want to delete this")) return;
try{
    await deletePost(id);
    setposts((pre)=>pre.filter((p)=>p.id !== id));
}catch{
    alert("failed to delete");
}
}




  useEffect(() => {
    loadPosts();
  }, []);

  if(loading) return <p> Loading Posts...</p>

  if(error) return <p>{error}</p>

  return(

    <div className="post-list post-card" style={{display:"flex"  , justifyContent:"center" , flexWrap:"nowrap"}}>

{
    posts.map((post)=>(
        <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>By {post.author}</p>
            <div style={{margin:"10px"}}>
                <Link to={`/edit/${post.id}`} style={{color:"white" , backgroundColor:"green" , padding:"15px" , borderRadius:"10px" }} >Edit</Link>
                <button onClick={()=>handleDelete(post.id)}>
                    Delete
                </button>
         
            </div>
       
        </div>

        
    ))
}



    </div>

  
  )
}

export default PostList;
