import Admin from "../models/Admin.js"
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" })
    }

    const existingAdmin = await Admin.findOne({ username })
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" })
    }

    const admin = new Admin({ username, password })
    await admin.save()

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    })

    res.status(201).json({ message: "Admin created successfully", token })
  } catch (error) {
    next(error)
  }
}

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" })
    }

    const admin = await Admin.findOne({ username })
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const isPasswordValid = await admin.matchPassword(password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    })

    res.status(200).json({ message: "Login successful", token })
  } catch (error) {
    next(error)
  }
}
