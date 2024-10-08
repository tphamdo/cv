import { PropTypes } from 'prop-types';
import { useState } from 'react';
import EducationForm from './EducationForm.jsx';
import ExpandIcon from './ExpandIcon.jsx';
import { v4 as uuidv4 } from 'uuid';

function EducationFormCard({ educationList, setEducationList }) {
  const [showForm, setShowForm] = useState(false);
  const [showBody, setShowBody] = useState(true);
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

  function handleCancel() {
    setShowForm(false);
  }

  function handleDelete() {
    setEducationList(educationList.filter((e) => e.id !== education.id));
    setShowForm(false);
  }

  var body;
  if (!showBody) {
    body = null;
  } else if (showForm) {
    body = (
      <EducationForm
        education={education}
        setEducation={setEducation}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
      />
    );
  } else {
    body = (
      <div className="card_body">
        {educationList.map((ed) => (
          <div
            className="card_entry"
            key={ed.id}
            onClick={() => {
              setShowForm(true);
              setEducation(ed);
            }}
          >
            {ed.school}
          </div>
        ))}
        <button
          onClick={() => {
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
    <div className="card">
      <div className="card_header">
        <h3> Education </h3>
        <ExpandIcon
          initClosed={false}
          handleClick={() => setShowBody((show) => !show)}
        />
      </div>
      {body}
    </div>
  );
}

EducationFormCard.propTypes = {
  educationList: PropTypes.array,
  setEducationList: PropTypes.func,
};

export default EducationFormCard;
