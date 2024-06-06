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



//Best practice for the react project structure

// 1. Create Route folder . Onlt access route folder from app.jsx
// 2. Create pages folder.
// 3. Create different types of folder for different pages.
//    Example: Create home folder for home page, About folder for about page etc 
// 4. Create components folder for Components, card or other. 
// 5. Create assets folder for images, style 
// 6. Create Layout for Header, footer and common data for all pages. 
// 7. Middleware folder for Redux
// 8. Services folder for actions, consists, reducer
// 9. Create Utilities folder for Date, number
