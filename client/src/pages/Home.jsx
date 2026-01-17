"use client"

import { useState, useEffect } from "react"
import { memberAPI } from "../services/api"
import FamilyMemberCard from "../components/FamilyMemberCard"
import SurnameFilter from "../components/SurnameFilter"

export default function Home() {
  const [members, setMembers] = useState([])
  const [filteredMembers, setFilteredMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      setLoading(true)
      const response = await memberAPI.getAllMembers()
      setMembers(response.data)
      setFilteredMembers(response.data)
      setError(null)
    } catch (err) {
      setError("Failed to load family members")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (surname) => {
    if (surname === "") {
      setFilteredMembers(members)
    } else {
      const filtered = members.filter((m) => m.surname.toLowerCase() === surname.toLowerCase())
      setFilteredMembers(filtered)
    }
  }

  return (
    <div className="home">
      <header className="header">
        <h1>Family Directory</h1>
        <p>View all family members</p>
      </header>

      <main className="main-content">
        <SurnameFilter onFilterChange={handleFilterChange} members={members} />

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading members...</div>
        ) : filteredMembers.length === 0 ? (
          <div className="no-results">No family members found</div>
        ) : (
          <div className="members-grid">
            {filteredMembers.map((member) => (
              <FamilyMemberCard key={member._id} member={member} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
