"use client"

export default function MemberList({ members, onEdit, onDelete }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="member-list">
      <h2>Members</h2>
      <table className="members-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Surname</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member._id}>
              <td>{member.fullName}</td>
              <td>{member.surname}</td>
              <td>{formatDate(member.dateOfBirth)}</td>
              <td className="actions">
                <button className="btn-edit" onClick={() => onEdit(member)}>
                  Edit
                </button>
                <button className="btn-delete" onClick={() => onDelete(member._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
