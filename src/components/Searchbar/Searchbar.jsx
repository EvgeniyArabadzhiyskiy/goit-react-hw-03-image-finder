import PropTypes from "prop-types";
import {  toast } from 'react-toastify';
import { BiSearchAlt }   from 'react-icons/bi'
import { Component } from 'react';
import Box from 'components/Box/Box';
import { Searchbars, SearchButton, SearchInput } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    query: '',
  };

  changeSearchInput = evt => {
    this.setState({ query: evt.target.value.toLowerCase() });
  };

  formSubmit = evt => {
    evt.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Enter a search term')
      return;
    }

    this.props.onSearhFormSubmit(this.state.query);
  };

  render() {
    return (
      <Searchbars>
        <Box bg="white"  display="flex" alignItems="center" width="100%"
          maxWidth="600px" borderRadius="normal" overflow="hidden" as="form"
          onSubmit={this.formSubmit}>
            
          <SearchButton type="submit">
            <BiSearchAlt size={24} />
          </SearchButton>

          <SearchInput
            type="text"
            name="query"
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.changeSearchInput}
          />
        </Box>
      </Searchbars>
    );
  }
}

Searchbar.propTypes = {
  onSearhFormSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
