import { useState, Fragment } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo.jsx';
import PersonalInfoFormCard from './components/PersonalInfoFormCard.jsx';
import Education from './components/Education.jsx';
import EducationFormCard from './components/EducationFormCard.jsx';
import exampleData from './exampleData.js';

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [educationList, setEducationList] = useState(exampleData.educationList);

  return (
    <div className="body">
      <div className="forms">
        <PersonalInfoFormCard info={personalInfo} setInfo={setPersonalInfo} />
        <EducationFormCard
          educationList={educationList}
          setEducationList={setEducationList}
        />
      </div>

      <div className="cv">
        <PersonalInfo info={personalInfo} />
        <Education educationList={educationList} />
      </div>
    </div>
  );
}

export default App;
