import React from 'react';
import NotesItem from './notes-item';
import PropTypes from 'prop-types';

function NotesList({ notes, onArchive, onDelete }) {
  const listNotes = notes.filter((note) => !note.archived);
  console.log(notes);

  return (
    <div className='notesList'>
      {listNotes.length > 0 ? (
        listNotes.map((note) => (
          <NotesItem
            key={note.id}
            id={note.id}
            {...note}
            onArchive={onArchive}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className='notes-empty-message'>Tidak ada notes yang diarsipkan</p>
      )}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  })).isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotesList;