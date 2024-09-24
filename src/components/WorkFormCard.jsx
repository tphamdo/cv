import { useState } from 'react';
import WorkForm from './WorkForm.jsx';
import ExpandIcon from './ExpandIcon.jsx';
import { v4 as uuidv4 } from 'uuid';

function WorkFormCard({ workList, setWorkList }) {
  const [showForm, setShowForm] = useState(false);
  const [showBody, setShowBody] = useState(true);
  const [work, setWork] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (work.id) {
      // is edit
      let newWorkList = workList.map((e) => {
        return e.id === work.id ? work : e;
      });
      setWorkList(newWorkList);
    } else {
      let newWork = { ...work, id: uuidv4() };
      setWorkList([...workList, newWork]);
    }
    setShowForm(false);
  }

  function handleCancel() {
    setShowForm(false);
  }

  function handleDelete() {
    setWorkList(workList.filter((e) => e.id !== work.id));
    setShowForm(false);
  }

  if (!showBody) {
    var body = null;
  } else if (showForm) {
    var body = (
      <WorkForm
        work={work}
        setWork={setWork}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
      />
    );
  } else {
    var body = (
      <div className="card_body">
        <div>
          {workList.map((w) => (
            <div
              key={w.id}
              onClick={(e) => {
                setShowForm(true);
                setWork(w);
              }}
            >
              {w.company}
            </div>
          ))}
        </div>
        <button
          onClick={(e) => {
            setShowForm(true);
            setWork({});
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
        <h3> Work </h3>
        <ExpandIcon
          initClosed={false}
          handleClick={() => setShowBody((show) => !show)}
        />
      </div>
      {body}
    </div>
  );
}

export default WorkFormCard;
