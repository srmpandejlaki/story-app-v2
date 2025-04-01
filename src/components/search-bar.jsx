import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };

    this.onSearchingEventHandler = this.onSearchingEventHandler.bind(this);
  }

  onSearchingEventHandler(event) {
    const keyword = event.target.value;
    this.setState({ keyword });

    if (this.props.onSearch) {
      this.props.onSearch(keyword);
    }
  }

  render() {
    return (
      <div className='searchBar'>
        <h3>Find Your Note</h3>
        <input
          type='text'
          placeholder='Search notes...'
          value={this.state.keyword}
          onChange={this.onSearchingEventHandler}
        />
      </div>
    );
  }
}

export default SearchBar;
