import React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__container__title">
          Jessica Fauré - Sophrologue
        </h1>
        <div className="navbar__container__links">
          <Link className="navbar__container__links__link" to="/">
            Home
          </Link>
          <Link className="navbar__container__links__link" to="/pageTwo">
            Page Deux
          </Link>
          <Link className="navbar__container__links__link" to="/pageThree">
            Page Trois
          </Link>
        </div>
      </div>
    </nav>
  )
}
