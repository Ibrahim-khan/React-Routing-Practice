import {BrowserRouter, Routes, Route} from "react-router-dom";

//Pages 
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Blog from "./Pages/Blog.jsx";
import Error from "./Pages/Error.jsx";

import User from "./Pages/User.jsx";

import Navbar from "./Components/Navbar.jsx";
import './App.css';
function App() {
  

  return (
    <>
      <div>
      <BrowserRouter>  
         <Navbar />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Blogs" element={<Blogs />}/>
          <Route path="/Blogs/:title" element={<Blog />}/>
          <Route path="*" element={<Error />}/>

          <Route path="/user" element={<User />}/>
      </Routes>
    </BrowserRouter>
      </div>
      
    </>
  )
}

// /home -> <Home />
// /contact -> <Contact />

export default App
