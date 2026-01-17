"use client"

import { useState, useEffect } from "react"
import ImageUploader from "./ImageUploader"

export default function MemberForm({ member, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    fullName: "",
    surname: "",
    dateOfBirth: "",
    photo: "",
  })

  useEffect(() => {
    if (member) {
      setFormData({
        fullName: member.fullName,
        surname: member.surname,
        dateOfBirth: member.dateOfBirth.split("T")[0],
        photo: member.photo || "",
      })
    }
  }, [member])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageSelect = (imageUrl) => {
    setFormData((prev) => ({
      ...prev,
      photo: imageUrl,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form className="member-form" onSubmit={handleSubmit}>
      <h2>{member ? "Edit Member" : "Add New Member"}</h2>

      <div className="form-group">
        <label htmlFor="fullName">Full Name *</label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="surname">Surname *</label>
        <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth *</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Photo</label>
        <ImageUploader onImageSelect={handleImageSelect} initialUrl={formData.photo} />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {member ? "Update Member" : "Add Member"}
        </button>
        <button type="button" className="btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}
