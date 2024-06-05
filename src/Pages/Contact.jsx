import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate =useNavigate();

  return (
    <div>
      <h1>Contact Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio labore accusantium quia magni nemo!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut officiis cupiditate perspiciatis veritatis inventore illo natus odio recusandae mollitia repellendus at aliquid necessitatibus, dolorum aperiam dicta repellat hic ab?</p>
      
      <button onClick={() => {
        navigate("/");
      }}>Go to Home Page</button>
      
    </div>
  )
}

export default Contact
