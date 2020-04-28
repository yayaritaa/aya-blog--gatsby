import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
const Header = () => {
  return (
    <header>
      <Link className={headerStyles.link} to="/blog">
        Home
      </Link>
      Menu should be here
    </header>
  )
}

export default Header
