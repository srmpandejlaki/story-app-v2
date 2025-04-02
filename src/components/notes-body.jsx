import React from 'react';
import { showFormattedDate } from '../utils/index';
import PropTypes from 'prop-types';

function NotesBody({ title, body, createdAt }) {
  return (
    <div>
      <h2 className='title'>{title}</h2>
      <p className='body'>{body}</p>
      <p className='createdAt'>{showFormattedDate(createdAt)}</p>
    </div>
  );
}

NotesBody.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NotesBody;
