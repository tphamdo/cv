import { PropTypes } from 'prop-types';
import Input from './Input.jsx';
import _ from 'lodash';

function WorkForm({ work, setWork, handleSubmit, handleCancel, handleDelete }) {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="Company"
        value={work.company}
        onChange={(e) => setWork({ ...work, company: e.target.value })}
      />
      <Input
        name="Position"
        value={work.position}
        onChange={(e) => setWork({ ...work, position: e.target.value })}
      />
      <Input
        name="Start Date"
        value={work.startDate}
        onChange={(e) => setWork({ ...work, startDate: e.target.value })}
      />
      <Input
        name="End Date"
        value={work.endDate}
        onChange={(e) => setWork({ ...work, endDate: e.target.value })}
      />
      <Input
        name="Location"
        value={work.location}
        onChange={(e) => setWork({ ...work, location: e.target.value })}
      />
      <label htmlFor="Description">Description</label>
      <textarea
        id="Description"
        value={work.description}
        onChange={(e) => setWork({ ...work, description: e.target.value })}
      />
      <div className="buttons">
        {!_.isEmpty(work) && (
          <input type="button" value="Delete" onClick={handleDelete} />
        )}
        <input
          type="button"
          value="Cancel"
          className="cancel"
          onClick={handleCancel}
        />
        <input type="Submit" />
      </div>
    </form>
  );
}

WorkForm.propTypes = {
  work: PropTypes.object,
  setWork: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default WorkForm;
