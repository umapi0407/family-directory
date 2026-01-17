export default function FamilyMemberCard({ member }) {
  const formatDateMasked = (data) => {
    const d = new Date(date);

    const day = d.getDate();
    const month = d.toLocaleString("en-US", {month: "long"});
    const year = d.getFullYear().toString();

    const maskedYear = year.slice(0,,2) + "**";

    return `${day} ${month} ${maskedYear}`;
  // const formatDate = (date) => {
  //   return new Date(date).toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   })
  // }

  return (
    <div className="card">
      <div className="card-image">
        {member.photo ? (
          <img src={member.photo || "/placeholder.svg"} alt={member.fullName} />
        ) : (
          <div className="placeholder">No Photo</div>
        )}
      </div>
      <div className="card-content">
        <h3>{member.fullName}</h3>
        <p className="surname">Surname: {member.surname}</p>
        <p className="dob">DOB: {formatDateMasked(member.dateOfBirth)}</p>
      </div>
    </div>
  )
}
