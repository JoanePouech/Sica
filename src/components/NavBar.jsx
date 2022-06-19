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
          <Link
            className="navbar__container__links__link"
            activeClassName="navbar__container__links__link--active"
            to="/"
          >
            Accueil
          </Link>
          <Link
            className="navbar__container__links__link"
            activeClassName="navbar__container__links__link--active"
            to="/sophrologie"
          >
            Sophrologie
          </Link>
          <Link
            className="navbar__container__links__link"
            activeClassName="navbar__container__links__link--active"
            to="/seances"
          >
            Les séances
          </Link>
          <Link
            className="navbar__container__links__link"
            activeClassName="navbar__container__links__link--active"
            to="/interventions"
          >
            Mes interventions
          </Link>
          <Link
            className="navbar__container__links__link"
            activeClassName="navbar__container__links__link--active"
            to="/presentation"
          >
            Qui suis-je ?
          </Link>
          <Link
            className="navbar__container__links__link"
            activeClassName="navbar__container__links__link--active"
            to="/tarifs"
          >
            Tarifs
          </Link>
          <Link
            className="navbar__container__links__link"
            activeClassName="navbar__container__links__link--active"
            to="/contact"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </nav>
  )
}
