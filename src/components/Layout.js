import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__content">{children}</div>
      <footer className="layout__footer">
        <p>Mentions légales - Copyright 2022</p>
      </footer>
    </div>
  )
}
