import React , {useState} from 'react';
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
import Protected from './Pages/Protected.jsx';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div>
      <BrowserRouter>  
         <Navbar />
        {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log Out {" "}
          </button>
          ) : (
          <button
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
            }}
          >
            Log In
          </button>)}

      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Contact" element={<Contact />}/>

          <Route path="/Blogs" element={<Protected isLoggedIn={isLoggedIn}>
            <Blogs />
          </Protected>}/>

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
