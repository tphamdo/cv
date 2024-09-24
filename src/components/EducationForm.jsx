import Input from './Input.jsx';

function EducationForm({
  education,
  setEducation,
  handleSubmit,
  handleCancel,
  handleDelete,
}) {
  return (
    <form
      className="educationForm educationBody formBody"
      onSubmit={handleSubmit}
    >
      <Input
        name="School"
        value={education.school}
        onChange={(e) => setEducation({ ...education, school: e.target.value })}
      />
      <Input
        name="Start Date"
        value={education.startDate}
        onChange={(e) =>
          setEducation({ ...education, startDate: e.target.value })
        }
      />
      <Input
        name="End Date"
        value={education.endDate}
        onChange={(e) =>
          setEducation({ ...education, endDate: e.target.value })
        }
      />
      <Input
        name="Degree"
        value={education.degree}
        onChange={(e) => setEducation({ ...education, degree: e.target.value })}
      />
      <Input
        name="Location"
        value={education.location}
        onChange={(e) =>
          setEducation({ ...education, location: e.target.value })
        }
      />
      <div className="buttons">
        <input type="Submit" />
        <input type="button" value="Cancel" onClick={handleCancel} />
        <input type="button" value="Delete" onClick={handleDelete} />
      </div>
    </form>
  );
}

export default EducationForm;
