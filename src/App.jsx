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
          maxLength="15"
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

function EducationForm({ educationList, setEducationList, setShowForm }) {
  const [school, setSchool] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [degree, setDegree] = useState('');
  const [location, setLocation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    let newEd = { school, startDate, endDate, degree, location, id: uuidv4() };
    setEducationList([educationList, newEd]);
    setShowForm(false);
  }

  return (
    <form className="educationForm educationBody" onSubmit={handleSubmit}>
      <Input
        name="School"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      />
      <Input
        name="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <Input
        name="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <Input
        name="Degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <Input
        name="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
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

function EducationCard(props) {
  const [showForm, setShowForm] = useState(false);

  console.log(props);
  if (showForm) {
    var body = <EducationForm {...props} setShowForm={setShowForm} />;
  } else {
    var body = (
      <div className="educationBody">
        <div>
          {props.educationList.map((ed) => (
            <div key={ed.id}> {ed.school} </div>
          ))}
        </div>
        <button onClick={(e) => setShowForm(true)}>Add</button>
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
  maxLength = '30',
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

  console.log(info);
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
