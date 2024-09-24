import { PropTypes } from 'prop-types';

function Work({ workList }) {
  return (
    <div className="work">
      <h3 className="cv_header">Work Experience</h3>
      {workList.map((w) => (
        <div className="cv_entry" key={w.id}>
          <div className="left">
            <div key="date">
              {w.startDate} - {w.endDate}
            </div>
            <div key="location">{w.location}</div>
          </div>
          <div className="right">
            <div key="work" className="bold">
              {w.company}
            </div>
            <div key="position">{w.position}</div>
            <div key="description" className="description">
              {w.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Work.propTypes = {
  workList: PropTypes.array,
};

export default Work;
