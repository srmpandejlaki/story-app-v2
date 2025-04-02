import React from 'react';
import { addNote } from '../utils/local-data';
import FormContainer from '../components/form-container';
import { useNavigate } from 'react-router-dom';

function AddNote() {
  const navigate = useNavigate();

  function onAddNotesHandler({ title, body }) {
    addNote(title, body);
    navigate('/');
  }

  return (
    <div className='main'>
    <section>
        <h1>Add Your Notes</h1>
        <FormContainer addNotes={onAddNotesHandler}/>
    </section>
    </div>
  );
}

export default AddNote;
