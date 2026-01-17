"use client"

import { useState } from "react"

export default function ImageUploader({ onImageSelect, initialUrl }) {
  const [preview, setPreview] = useState(initialUrl || null)
  const [uploadMethod, setUploadMethod] = useState("url")
  const [imageUrl, setImageUrl] = useState(initialUrl || "")
  const [uploading, setUploading] = useState(false)

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file")
      return
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB")
      return
    }

    setUploading(true)

    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      )

      const data = await response.json()

      if (data.secure_url) {
        setPreview(data.secure_url)
        setImageUrl(data.secure_url)
        onImageSelect(data.secure_url)
      } else {
        alert("Upload failed. Please try again.")
      }
    } catch (error) {
      console.error("Upload error:", error)
      alert("Upload failed. Please try again.")
    } finally {
      setUploading(false)
    }
  }

  const handleUrlChange = (url) => {
    setImageUrl(url)
    if (url) {
      setPreview(url)
      onImageSelect(url)
    }
  }

  return (
    <div className="image-uploader">
      <div className="upload-tabs">
        <button className={`tab-btn ${uploadMethod === "url" ? "active" : ""}`} onClick={() => setUploadMethod("url")} type="button">
          URL
        </button>
        <button
          className={`tab-btn ${uploadMethod === "file" ? "active" : ""}`}
          onClick={() => setUploadMethod("file")}
          type="button"
        >
          Upload
        </button>
      </div>

      {uploadMethod === "url" ? (
        <div className="url-input-group">
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => handleUrlChange(e.target.value)}
            placeholder="https://example.com/photo.jpg"
            className="url-input"
          />
        </div>
      ) : (
        <div className="file-upload-group">
          <label htmlFor="file-input" className="file-upload-label">
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              disabled={uploading}
              className="file-input"
            />
            <span className="upload-text">{uploading ? "Uploading..." : "Click to upload or drag and drop"}</span>
          </label>
        </div>
      )}

      {preview && (
        <div className="preview-container">
          <img src={preview || "/placeholder.svg"} alt="Preview" className="preview-image" />
          <button
            type="button"
            className="remove-image-btn"
            onClick={() => {
              setPreview(null)
              setImageUrl("")
              onImageSelect("")
            }}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  )
}
