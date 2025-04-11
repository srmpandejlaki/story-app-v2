import React from 'react';
import { addNote, getActiveNotes, getArchivedNotes, archiveNote, unarchiveNote, deleteNote } from '../utils/index';
import NoteLists from '../components/notes-list';
import ArchiveList from '../components/archive-list';
import FormContainer from '../components/form-container';
import SearchBar from '../components/search-bar';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNotes: [],
      archivedNotes: [],
      searchKeyword: props.defaultKeyword || '',
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  async componentDidMount() {
    await this.loadNotes();
  }

  async loadNotes() {
    const active = await getActiveNotes();
    const archived = await getArchivedNotes();

    if (!active.error && !archived.error) {
      this.setState({
        activeNotes: active.data,
        archivedNotes: archived.data,
      });
    }
  }

  async onAddNotesHandler({ title, body }) {
    const result = await addNote({ title, body });
    if (!result.error) {
      await this.loadNotes();
    }
  }

  async onArchiveHandler(id) {
    await archiveNote(id);
    await this.loadNotes();
  }

  async onUnarchiveHandler(id) {
    await unarchiveNote(id);
    await this.loadNotes();
  }

  async onDeleteHandler(id) {
    await deleteNote(id);
    await this.loadNotes();
  }

  onSearchHandler(keyword) {
    this.setState({ searchKeyword: keyword });
  }

  render() {
    const { activeNotes, archivedNotes, searchKeyword = '' } = this.state;

    const filteredActive = activeNotes.filter((note) =>
      note.title?.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const filteredArchived = archivedNotes.filter((note) =>
      note.title?.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
      <div className='main'>
        <section>
          <FormContainer addNotes={this.onAddNotesHandler} />
        </section>

        <section className='app-container'>
          <SearchBar onSearch={this.onSearchHandler} />
          <NoteLists
            notes={filteredActive.map((note) => ({
              ...note,
              id: note.id.toString()
            }))}
            onArchive={this.onArchiveHandler}
            onDelete={this.onDeleteHandler}
          />
        </section>

        <section className='archive-container'>
          <h1>Archive Notes</h1>
          <ArchiveList
            notes={filteredArchived.map((note) => ({
              ...note,
              id: note.id.toString()
            }))}
            onUnarchive={this.onUnarchiveHandler}
            onDelete={this.onDeleteHandler}
          />
        </section>
      </div>
    );
  }
}

export default HomePage;
