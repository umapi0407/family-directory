import FamilyMember from "../models/FamilyMember.js"

export const createMember = async (req, res, next) => {
  try {
    const { fullName, surname, dateOfBirth, photo } = req.body

    if (!fullName || !surname || !dateOfBirth) {
      return res.status(400).json({ message: "All fields are required" })
    }

    const member = new FamilyMember({
      fullName,
      surname,
      dateOfBirth,
      photo: photo || null,
    })

    await member.save()
    res.status(201).json({ message: "Member created successfully", member })
  } catch (error) {
    next(error.message);
    console.log(error.message);
  }
}

export const updateMember = async (req, res, next) => {
  try {
    const { id } = req.params
    const { fullName, surname, dateOfBirth, photo } = req.body

    const member = await FamilyMember.findByIdAndUpdate(
      id,
      {
        fullName,
        surname,
        dateOfBirth,
        photo,
        updatedAt: new Date(),
      },
      { new: true, runValidators: true },
    )

    if (!member) {
      return res.status(404).json({ message: "Member not found" })
    }

    res.status(200).json({ message: "Member updated successfully", member })
  } catch (error) {
    next(error)
  }
}

export const deleteMember = async (req, res, next) => {
  try {
    const { id } = req.params

    const member = await FamilyMember.findByIdAndDelete(id)

    if (!member) {
      return res.status(404).json({ message: "Member not found" })
    }

    res.status(200).json({ message: "Member deleted successfully" })
  } catch (error) {
    next(error)
  }
}

export const getAllMembers = async (req, res, next) => {
  try {
    const members = await FamilyMember.find().sort({ createdAt: -1 })
    res.status(200).json(members)
  } catch (error) {
    next(error)
  }
}

export const getMemberBySurname = async (req, res, next) => {
  try {
    const { surname } = req.query

    if (!surname) {
      return res.status(400).json({ message: "Surname query parameter required" })
    }

    const members = await FamilyMember.find({
      surname: { $regex: surname, $options: "i" },
    }).sort({ createdAt: -1 })

    res.status(200).json(members)
  } catch (error) {
    next(error)
  }
}
