import {BrowserRouter, Routes, Route} from "react-router-dom";

//Pages 
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Error from "./Pages/Error.jsx";

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
          <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
      </div>
      
    </>
  )
}

// /home -> <Home />
// /contact -> <Contact />

export default App
