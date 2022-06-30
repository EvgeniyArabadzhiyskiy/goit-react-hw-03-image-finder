import { Component } from 'react';
import axios from 'axios';
import Button from './Button/Button';
// import Box from './Box/Box';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    query: '',
    articles: [],
    page: 1,
    modalOpen: false,
    largeUrl: null
  };


  async componentDidUpdate(prevProps, prevState) {


    if (this.state.query !== prevState.query || this.state.page !== prevState.page) {

      const response = await axios(
        `https://pixabay.com/api/?key=26298929-dc8db63efad38f2c4177a32d6&q=${this.state.query}&image_type=photo&page=${this.state.page}&per_page=12`
      );

      this.setState(prevState => ({articles: [...prevState.articles, ...response.data.hits]}))
    }
  }

  handleFormSubmit = text => {
    this.setState({ query: text, page: 1, articles: [] });
    
  };

  handlebtnIncrement  = (e) => {
    this.setState(prevState => ({page: prevState.page + 1}))
 };

 handleImageClick = (imageId) => {
  this.setState({modalOpen: true})

   const findId = this.state.articles.find(({id}) => id === imageId)
    return this.setState({largeUrl: findId.largeImageURL})
 }


 

  render() {

  
    return (
      // <Box width="1200px" m="0 auto" p="0 20px">
        <div className="App">
          {this.state.modalOpen &&  <Modal url={this.state.largeUrl} />}
          <Searchbar onSearhFormSubmit={this.handleFormSubmit} page={this.state.page}/>
          {/* <ImageGallery query={this.state.query} page={this.state.page} /> */}
          <ImageGallery articles={this.state.articles} onImageClick={this.handleImageClick} />
          {this.state.articles.length > 0 && <Button onClickBtnIncrement={this.handlebtnIncrement} />}
        </div>
      // </Box>
    );
  }
}

export default App;
