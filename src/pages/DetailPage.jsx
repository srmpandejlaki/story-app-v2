import React from 'react';
import NotesBody from '../components/notes-body';
import { getNote } from '../utils/local-data';
import { useParams } from 'react-router-dom';

function DetailPageWrapper() {
  const { id } = useParams();
  
  return <DetailNote id={id} />;
}

class DetailNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    const { note } = this.state;
    
    if (!note) {
      return <p>Note is not found!</p>;
    }

    return (
      <div className='detail-page'>
        <NotesBody id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} />
      </div>
    );
  }
}

export default DetailPageWrapper;
