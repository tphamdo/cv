function Education({ educationList }) {
  return (
    <div className="education">
      <h3 className="cv_header">Education</h3>
      {educationList.map((ed) => (
        <div className="cv_entry" key={ed.id}>
          <div className="left">
            <div key="date">
              {ed.startDate} - {ed.endDate}
            </div>
            <div key="location">{ed.location}</div>
          </div>
          <div className="right">
            <div className="bold" key="school">
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
