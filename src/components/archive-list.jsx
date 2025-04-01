import React from 'react';
import ArchiveItem from './archive-item';

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

export default ArchiveList;
