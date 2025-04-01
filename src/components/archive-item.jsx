import React from 'react';
import NotesBody from './notes-body';
import ArchiveButton from './archive-button';
import PropTypes from 'prop-types';

function ArchiveItem({ title, body, id, onUnarchive, onDelete }) {
  return (
    <div className='notesItem'>
      <NotesBody title={title} body={body}></NotesBody>
      <ArchiveButton id={id} onUnarchive={onUnarchive} onDelete={onDelete} ></ArchiveButton>
    </div>
  );
};

ArchiveItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ArchiveItem;