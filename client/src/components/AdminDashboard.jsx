"use client"

import { useState, useEffect } from "react"
import { memberAPI } from "../services/api"
import MemberForm from "./MemberForm"
import MemberList from "./MemberList"

export default function AdminDashboard({ onLogout }) {
  const [members, setMembers] = useState([])
  const [editingMember, setEditingMember] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      setLoading(true)
      const response = await memberAPI.getAllMembers()
      setMembers(response.data)
    } catch (error) {
      console.error("Failed to fetch members:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddMember = () => {
    setEditingMember(null)
    setShowForm(true)
  }

  const handleEditMember = (member) => {
    setEditingMember(member)
    setShowForm(true)
  }

  const handleDeleteMember = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) {
      return
    }

    try {
      await memberAPI.deleteMember(id)
      setMembers(members.filter((m) => m._id !== id))
    } catch (error) {
      console.error("Failed to delete member:", error)
    }
  }

  const handleFormSubmit = async (formData) => {
    try {
      if (editingMember) {
        await memberAPI.updateMember(editingMember._id, formData)
      } else {
        await memberAPI.createMember(formData)
      }
      fetchMembers()
      setShowForm(false)
      setEditingMember(null)
    } catch (error) {
      console.error("Failed to save member:", error)
    }
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </header>

      <main className="admin-main">
        <div className="dashboard-controls">
          <button className="add-member-btn" onClick={handleAddMember}>
            Add New Member
          </button>
        </div>

        {showForm && (
          <MemberForm
            member={editingMember}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowForm(false)
              setEditingMember(null)
            }}
          />
        )}

        {loading ? (
          <div className="loading">Loading members...</div>
        ) : (
          <MemberList members={members} onEdit={handleEditMember} onDelete={handleDeleteMember} />
        )}
      </main>
    </div>
  )
}
