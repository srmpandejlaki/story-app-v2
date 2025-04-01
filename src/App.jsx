import React from 'react';
import { getInitialData } from '../utils/index';
import NotesList from './components/notes-list';
import FormContainer from './components/form-container';
import ArchiveList from './components/archive-list';
import SearchBar from './components/search-bar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: '',
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: true };
      }
      return note;
    });
    this.setState({ notes });
  }

  onUnarchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: false };
      }
      return note;
    });
    this.setState({ notes });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onSearchHandler(keyword) {
    this.setState({ searchKeyword: keyword });
  }

  render() {
    const { notes, searchKeyword } = this.state;

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
      <div className='main'>
        <div>
          <FormContainer addNotes={this.onAddNotesHandler}/>
          <SearchBar onSearch={this.onSearchHandler} />
        </div>
        <div className='notesContainer'>
          <h1>Personal Notes</h1>
          <NotesList
            notes={filteredNotes.filter((note) => !note.archived)}
            onArchive={this.onArchiveHandler}
            onDelete={this.onDeleteHandler}
          />
        </div>
        <div className='archiveContainer'>
          <h1>Archive Notes</h1>
          <ArchiveList
            notes={filteredNotes.filter((note) => note.archived)}
            onUnarchive={this.onUnarchiveHandler}
            onDelete={this.onDeleteHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
