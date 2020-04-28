import React from "react"
import { Link } from "gatsby" // gatsby preload the page content that we are heading to when use this
import Footer from "../Components/footer"
import Header from "../Components/header"
import Layout from "../Components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>It's Aya's blog</h1>
      <p>
        Need a developer?
        <Link to="/contact" target="_blank">
          Contact me.
        </Link>
      </p>
    </Layout>
    // <div>
    //   <Header />
    //   <h1>It's Aya's blog</h1>
    //   <p>
    //     Need a developer?
    //     <Link to="/contact" target="_blank">
    //       Contact me.
    //     </Link>
    //   </p>
    //   <Footer />
    // </div>
  )
}

export default IndexPage
