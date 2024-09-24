import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function ExpandIcon({ handleClick, initClosed = true }) {
  const [rotation, setRotation] = useState(closed ? 0 : -180);
  return (
    <FontAwesomeIcon
      icon={faChevronUp}
      onClick={(e) => {
        if (handleClick) handleClick(e);
        setRotation((prevRotation) => (prevRotation === 0 ? -180 : 0));
      }}
      style={{
        transition: 'transform .3s',
        transform: `rotate(${rotation}deg)`,
        fontSize: '1rem',
      }}
    />
  );
}

export default ExpandIcon;
