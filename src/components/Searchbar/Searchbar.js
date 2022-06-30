import { Component } from 'react';

class Searchbar extends Component {
  state = {
    query: '',
  };

  changeSearchInput  = (evt) => {
    this.setState({ query: evt.target.value });
  };

  formSubmit = evt => {

    if (this.state.query.trim() === '') {
        alert("Enter a search term")
        return
    }

    evt.preventDefault();
    
    this.props.onSearhFormSubmit(this.state.query)
   
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.formSubmit}>
          <button className="SearchForm-button" type="submit" >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="query"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeSearchInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
