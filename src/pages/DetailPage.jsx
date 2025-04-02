import React from 'react';
import NotesBody from '../components/notes-body';
import { getNote } from '../utils/local-data';
import { useParams } from 'react-router-dom';

function DetailPageWrapper() {
  const { id } = useParams();
  console.log(id);
   return <DetailNote id={id} />;
}

class DetailNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
    console.log("Fetched Note:", this.state.note);
  }

  render() {
    const { note } = this.state;
    
    if (!note) {
      return <p>Note is not found!</p>;
    }

    return (
      <div className='detail'>
        <h1>Your Notes</h1>
        <NotesBody id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} />
      </div>
    );
  }
}

export default DetailPageWrapper;
