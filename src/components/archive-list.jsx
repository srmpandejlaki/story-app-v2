import React from 'react';
import ArchiveItem from './archive-item';

function ArchiveList({ notes, onUnarchive, onDelete }) {
  return (
    <div className='archive-list'>
      {!notes.length ? (
        <p className='notes-empty-message'>Tidak ada catatan</p>
      ) : (
        notes.filter((note) => note.archived).map((note) => (
          <ArchiveItem key={note.id.toString()} {...note} onUnarchive={onUnarchive} onDelete={onDelete} id={note.id.toString()} />
        ))
      )}
    </div>
  );
}

export default ArchiveList;
