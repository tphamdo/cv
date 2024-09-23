import { useState, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function PersonalInfo({ info }) {
  return (
    <div className="cv-header">
      <div className="name">{info.name}</div>
      <div className="info">
        <div>{info.email}</div>
        <div>{info.phone}</div>
        <div>{info.address}</div>
      </div>
    </div>
  );
}

function PersonalInfoForm({ info, setInfo }) {
  return (
    <div className="personalInfoCard">
      <h3> Personal Info </h3>
      <form className="personalInfoForm personalInfoBody">
        <Input
          name="Name"
          value={info.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
        <Input
          name="Email"
          type="email"
          value={info.email}
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
        />
        <Input
          name="Phone"
          type="tel"
          value={info.phone}
          onChange={(e) => setInfo({ ...info, phone: e.target.value })}
        />
        <Input
          name="Address"
          value={info.address}
          onChange={(e) => setInfo({ ...info, address: e.target.value })}
        />
      </form>
    </div>
  );
}

function Education({ educationList }) {
  return (
    <div className="education">
      <h3> Education </h3>
      {educationList.map((ed) => (
        <Fragment key={ed.id}>
          <div key="school">{ed.school}</div>
          <div key="date">
            {ed.startDate} - {ed.endDate}
          </div>
          <div key="degree">{ed.degree}</div>
          <div key="location">{ed.location}</div>
        </Fragment>
      ))}
    </div>
  );
}

function EducationForm({ setShowForm, education, setEducation, handleSubmit }) {
  return (
    <form className="educationForm educationBody" onSubmit={handleSubmit}>
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
        <input
          type="button"
          value="Cancel"
          onClick={(e) => setShowForm(false)}
        />
      </div>
    </form>
  );
}

function EducationCard({ educationList, setEducationList }) {
  const [showForm, setShowForm] = useState(false);
  const [education, setEducation] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (education.id) {
      // is edit
      let newEducationList = educationList.map((e) => {
        return e.id === education.id ? education : e;
      });
      setEducationList(newEducationList);
    } else {
      let newEd = { ...education, id: uuidv4() };
      setEducationList([...educationList, newEd]);
    }
    setShowForm(false);
  }

  if (showForm) {
    var body = (
      <EducationForm
        setShowForm={setShowForm}
        education={education}
        setEducation={setEducation}
        handleSubmit={handleSubmit}
      />
    );
  } else {
    var body = (
      <div className="educationBody">
        <div>
          {educationList.map((ed) => (
            <div
              key={ed.id}
              onClick={(e) => {
                setShowForm(true);
                setEducation(ed);
              }}
            >
              {ed.school}
            </div>
          ))}
        </div>
        <button
          onClick={(e) => {
            setShowForm(true);
            setEducation({});
          }}
        >
          Add
        </button>
      </div>
    );
  }

  return (
    <div className="educationCard">
      <h3> Education </h3>
      {body}
    </div>
  );
}

function Input({
  type = 'text',
  onChange,
  value = '',
  maxLength = '40',
  required = true,
  name = '',
}) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        onChange={onChange}
        maxLength={maxLength}
        required={required}
        id={name}
        value={value}
      />
    </>
  );
}

const _info = {
  name: 'Trueman Phamdo',
  email: 'trueman@phamdo.com',
  phone: '(410)-953-9920',
  address: 'Ellicott City, MD',
};

const _education = [
  {
    school: 'University of Maryland',
    startDate: '08/2018',
    endDate: '05/2022',
    degree: 'Bachelors in Computer Science',
    location: 'College Park, MD',
    id: uuidv4(),
  },
];

function App() {
  const [info, setInfo] = useState(_info);
  const [educationList, setEducationList] = useState(_education);

  return (
    <div className="body">
      <div className="forms">
        <PersonalInfoForm info={info} setInfo={setInfo} />
        <EducationCard
          educationList={educationList}
          setEducationList={setEducationList}
        />
      </div>

      <div className="cv">
        <PersonalInfo info={info} />
        <Education educationList={educationList} />
      </div>
    </div>
  );
}

export default App;
