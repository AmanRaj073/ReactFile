import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
      <>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <h1>This is About Page</h1>
    </>
  )
}

export default About