import React from 'react';
import { getAllNotes } from './utils/local-data';
import NoteLists from './components/notes-list';
import FormContainer from './components/form-container';
import ArchiveList from './components/archive-list';
import SearchBar from './components/search-bar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
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
        return { archived: !note.archived };
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
    const { notes, searchKeyword='' } = this.state;
    const filteredNotes = notes.filter((note) => {
      return note.title?.toLowerCase().includes(searchKeyword.toLowerCase());
    });

    return (
      <div className='main'>
        <section>
          <FormContainer addNotes={this.onAddNotesHandler}/>
        </section>
        <section className='app-container'>
          <h1>Your Notes</h1>
          <p>Welcome to Digital Personal Notes Chest. Always Save All Your Memories Here</p>
          <SearchBar onSearch={this.onSearchHandler} />
          <NoteLists
            notes={filteredNotes.filter((note) => !note.archived).map(note => ({
              ...note,
              id: note.id.toString() // Mengonversi id menjadi string
            }))}
            onArchive={this.onArchiveHandler}
            onDelete={this.onDeleteHandler}
          />
        </section>
        <section className='archiveContainer'>
          <h1>Archive Notes</h1>
          <ArchiveList
            notes={filteredNotes.filter((note) => note.archived).map(note => ({
              ...note,
              id: note.id.toString() // Mengonversi id menjadi string
            }))}
            onUnarchive={this.onUnarchiveHandler}
            onDelete={this.onDeleteHandler}
          />
        </section>
      </div>
    );
  }
}

export default App;
