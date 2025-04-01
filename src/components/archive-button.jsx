import React from 'react';
import PropTypes from 'prop-types';

function ArchiveButton({ id, onUnarchive, onDelete}) {
  return (
    <div className='btnContainer'>
      <button className='btnUnarchive' onClick={() => onUnarchive(id)}>Unarchive</button>
      <button className='btnDelete' onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.number.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ArchiveButton;