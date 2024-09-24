function Education({ educationList }) {
  return (
    <div className="education">
      <h3 className="header"> Education </h3>
      {educationList.map((ed) => (
        <div className="education_entry" key={ed.id}>
          <div className="left">
            <div key="date">
              {ed.startDate} - {ed.endDate}
            </div>
            <div key="location">{ed.location}</div>
          </div>
          <div className="right">
            <div className="school" key="school">
              {ed.school}
            </div>
            <div key="degree">{ed.degree}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
