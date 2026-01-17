"use client"

import { useState, useEffect } from "react"

export default function SurnameFilter({ onFilterChange, members }) {
  const [surnames, setSurnames] = useState([])
  const [selectedSurname, setSelectedSurname] = useState("")

  useEffect(() => {
    const uniqueSurnames = [...new Set(members.map((m) => m.surname))].sort()
    setSurnames(uniqueSurnames)
  }, [members])

  const handleSelect = (surname) => {
    setSelectedSurname(surname)
    onFilterChange(surname)
  }

  const handleClear = () => {
    setSelectedSurname("")
    onFilterChange("")
  }

  return (
    <div className="filter-container">
      <h2>Filter by Surname</h2>
      <div className="filter-buttons">
        <button className={`filter-btn ${selectedSurname === "" ? "active" : ""}`} onClick={handleClear}>
          All
        </button>
        {surnames.map((surname) => (
          <button
            key={surname}
            className={`filter-btn ${selectedSurname === surname ? "active" : ""}`}
            onClick={() => handleSelect(surname)}
          >
            {surname}
          </button>
        ))}
      </div>
    </div>
  )
}
