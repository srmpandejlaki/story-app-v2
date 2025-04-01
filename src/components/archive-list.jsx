import React from 'react';
import ArchiveItem from './archive-item';
import PropTypes from 'prop-types';

function ArchiveList({ notes, onUnarchive, onDelete }) {
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className='archiveList'>
      {archivedNotes.length > 0 ? (
        archivedNotes.map((note) => (
          <ArchiveItem
            key={note.id}
            id={note.id}
            {...note}
            onUnarchive={onUnarchive}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className='notes-empty-message'>Tidak ada notes yang diarsipkan</p>
      )}
    </div>
  );
}

ArchiveList.propTypes = {
  id: PropTypes.string.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ArchiveList;
