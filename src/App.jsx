import { useState, Fragment } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo.jsx';
import PersonalInfoFormCard from './components/PersonalInfoFormCard.jsx';
import Education from './components/Education.jsx';
import EducationFormCard from './components/EducationFormCard.jsx';
import Work from './components/Work.jsx';
import WorkFormCard from './components/WorkFormCard.jsx';
import exampleData from './exampleData.js';

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [educationList, setEducationList] = useState(exampleData.educationList);
  const [workList, setWorkList] = useState(exampleData.workList);

  return (
    <div className="body">
      <div className="forms">
        <PersonalInfoFormCard info={personalInfo} setInfo={setPersonalInfo} />
        <EducationFormCard
          educationList={educationList}
          setEducationList={setEducationList}
        />
        <WorkFormCard workList={workList} setWorkList={setWorkList} />
      </div>

      <div className="cv">
        <PersonalInfo info={personalInfo} />
        <Education educationList={educationList} />
        <Work workList={workList} />
      </div>
    </div>
  );
}

export default App;
