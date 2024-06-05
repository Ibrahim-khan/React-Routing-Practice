import React from 'react'
// import useState from {useState, useEffect};
import {useParams, useLocation } from 'react-router-dom'
// import { blogsData } from '../Data';

const Blog = () => {
    const {title} = useParams();
    const location = useLocation();


    // const [bodyData, setBodyData] = useState("");

    // useEffect(() => {
    //     const blogData = blogsData.filter((blog) => blog.title === title);
    //     setBodyData(blogData[0].body);
    // }, []);

  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state?.body?.slice(0, 150) || ''}</p>
      <p>{location.state?.body?.slice(151, 500) || ''}</p>
    </div>
  )
}

export default Blog
