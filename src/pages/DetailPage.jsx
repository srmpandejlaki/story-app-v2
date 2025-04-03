import React from 'react';
import { showFormattedDate } from '../utils/index';
import { getNote } from '../utils/local-data';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        <p className='title'>{note.title}</p>
        <p className='body'>{note.body}</p>
        <p className='createdAt'>{showFormattedDate(note.createdAt)}</p>
      </div>
    );
  }
}

DetailNote.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
