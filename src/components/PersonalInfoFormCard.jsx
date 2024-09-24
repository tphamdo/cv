import { PropTypes } from 'prop-types';
import { useState } from 'react';
import Input from './Input.jsx';
import ExpandIcon from './ExpandIcon.jsx';

function PersonalInfoFormCard({ info, setInfo }) {
  const [showBody, setShowBody] = useState(true);

  return (
    <div className="card">
      <div className="card_header">
        <h3> Personal Info </h3>
        <ExpandIcon
          initClosed={false}
          handleClick={() => setShowBody((show) => !show)}
        />
      </div>
      {showBody && (
        <form>
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
      )}
    </div>
  );
}

PersonalInfoFormCard.propTypes = {
  info: PropTypes.object,
  setInfo: PropTypes.func,
};

export default PersonalInfoFormCard;
