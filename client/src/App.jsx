"use client"

import { useState } from "react"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import "./App.css"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className="app">
      <nav className="navbar">
        <button className={`nav-link ${currentPage === "home" ? "active" : ""}`} onClick={() => setCurrentPage("home")}>
          Family Directory
        </button>
        <button
          className={`nav-link ${currentPage === "admin" ? "active" : ""}`}
          onClick={() => setCurrentPage("admin")}
        >
          Admin
        </button>
      </nav>

      <div className="page-content">
        {currentPage === "home" && <Home />}
        {currentPage === "admin" && <Admin />}
      </div>
    </div>
  )
}
