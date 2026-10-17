import { BrowserRouter , Routes , Route } from "react-router-dom";


import Home from "./pages/home"
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import "./styles.css";


function App(){
    return(
         
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home/>}></Route>
            <Route path="/create" element={<CreatePost/>}></Route>
           <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
        
        </BrowserRouter>
    )
}

export default App;