import PostList from "../components/PostList";
import { Link } from "react-router-dom";


const Home = ()=>{
    return(
        <>
       <div className="page page-form" style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        <h1>My App</h1>
        <Link to="/create"> <h1 style={{fontSize:"20%"}}> + Create Post  </h1></Link>
        <PostList/>
       </div>
        </>
    )
}

export default Home;