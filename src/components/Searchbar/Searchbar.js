import { Component } from 'react';
import { Searchbars } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    query: '',
  };

  

  changeSearchInput  = (evt) => {
    this.setState({ query: evt.target.value.toLowerCase() });
  };

  formSubmit = evt => {
    evt.preventDefault();

    if (this.state.query.trim() === '') {
        alert("Enter a search term")
        return
    }

    
    
    this.props.onSearhFormSubmit(this.state.query)
   
  };

  render() {
    return (
      <Searchbars >
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
      </Searchbars>
    );
  }
}

export default Searchbar;
