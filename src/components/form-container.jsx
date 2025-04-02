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

  onTitleChangeEventHandler = (event) => {
    this.setState({ title: event.target.value });
  }

  onBodyChangeEventHandler = (event) => {
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
    const { title, body } = this.state;

    return (
      <div className='form-container'>
        <h1>Let's Create Your Note</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <section className='form-input'>
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
          </section>
          <button className='btn-form' type='submit'>Save</button>
        </form>
      </div>
    );
  }
}

export default FormContainer;
