import React from 'react';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      titleLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler= (event) => {
    const { titleLimit } = this.state;
    const inputTitle = event.target.value;

    // Batasi input sesuai `titleLimit`
    if (inputTitle.length <= titleLimit) {
      this.setState({ title: inputTitle });
    }
  }

  onBodyChangeEventHandler= (event) => {
    this.setState({ body: event.target.value });
  }

  onSubmitEventHandler = (event) => {
    event.preventDefault();

    const { title, body } = this.state;

    if (title.trim().length === 0 || body.trim().length === 0) {
      alert('Title and description cannot be empty!');
      return;
    }

    this.props.addNotes({ title, body });
    this.setState({ title: '', body: '' }); // Reset form
  }

  render() {
    const { title, body, titleLimit } = this.state;
    const remainingChars = titleLimit - title.length;

    return (
      <div className='formContainer'>
        <h1>Let's Create Your Note</h1>
        <p className="character-limit">remaining characters available: {remainingChars}</p>
        <form className='formInput' onSubmit={this.onSubmitEventHandler}>
          <input
            type='text'
            placeholder='Title Notes'
            value={title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            placeholder='Description'
            value={body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button className='btnForm' type='submit'>Save</button>
        </form>
      </div>
    );
  }
}

export default FormContainer;
