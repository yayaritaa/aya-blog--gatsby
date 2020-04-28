import React from "react"
import { Link } from "gatsby" // gatsby preload the page content that we are heading to when use this

const IndexPage = () => {
  return (
    <div>
      <h1>It's Aya's blog</h1>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </div>
  )
}

export default IndexPage
