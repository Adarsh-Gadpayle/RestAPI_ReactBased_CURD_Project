import { useState,useEffect } from "react";
import { getPost,updatePost } from "../services/Api";
import { useParams,useNavigate } from "react-router-dom";


const EditPost = ()=>{
      
 const {id} = useParams();
  const navigate = useNavigate();

  const [post, setpost] = useState({ title: "", content: "", author: "" });
  const [error, setError] = useState(null);
  const [submitting, setsubmitting] = useState(false);

  const [loading,setloading] = useState(false);


useEffect(()=>{

    const loadPost = async()=>{
        try{
            setloading(true);
            const res= await getPost(id);
            setpost(res.data);
        }catch{
            setError("failec to load");
        }finally{
            setloading(false);
        }
    }

    loadPost();

},[id])


const handleChange = (event) => {
  const { name, value } = event.target;
  setpost((currentPost) => ({ ...currentPost, [name]: value }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!post.title.trim() || !post.content.trim() || !post.author.trim()) {
      setError("all fields are required");
      return;
    }
    try {
      setsubmitting(true);
      await updatePost(id,post);
      navigate("/");
    } catch {
      setError("Failed to Update post");
    } finally {
     setsubmitting(false);
    }
  };


  if(loading) return <p> Loading Post ..... </p>

  return (
    <>
    <div className="page">
      <h1>Update post component</h1>
        { 
        error && (<p>{error}</p>)
        }
      <div className="post-form">
        <form onSubmit={handleSubmit}>
          <h2>Edit your Post here</h2>

          <div>
            <label> Title : </label>
            <input
              type="text"
              name="title"
              value={post.title}
              placeholder="Enter your post title"
              onChange={handleChange}
            />
          </div>

          <div>
            <label> Content : </label>
            <input
              type="text"
              name="content"
              value={post.content}
              placeholder="Enter your post content"
              onChange={handleChange}
            />
          </div>

          <div>
            <label> Author : </label>
            <input
              type="text"
              name="author"
              value={post.author}
              placeholder="Enter your post Author"
              onChange={handleChange}
            />
          </div>

<button type="submit">
{
    submitting? "Updating...." : "Update Post"
}
</button>

<button onClick={()=>navigate("/")}>Cancel</button>
        </form>
      </div>
      </div>
        </>
    )
}

export default EditPost;