import axios from 'axios';
import { Circles } from 'react-loader-spinner';
import { Component } from 'react';
import Button from './Button/Button';
// import Box from './Box/Box';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    page: 1,
    query: '',
    articles: [],
    showModal: false,
    activIndex: null,
    // isloading: false,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      // this.setState({ isloading: true });
      this.setState({ status: 'pending' });
      try {
        const response = await axios(
          `https://pixabay.com/api/?key=26298929-dc8db63efad38f2c4177a32d6&q=${this.state.query}&image_type=photo&page=${this.state.page}&per_page=12`
        );
        this.setState(prevState => ({
          articles: [...prevState.articles, ...response.data.hits],
          status: 'resolved'
        }));
      } catch (error) {}
      //  finally { this.setState({ isloading: false });}
    }
  }

  handleFormSubmit = text => {
    this.setState({ query: text.trim(), page: 1, articles: [] });
  };

  handleBtnIncrement = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  handleImageClick = index => {
    this.toggleModal();
    return this.setState({ activIndex: this.state.articles[index] });
  };

  render() {
    const { showModal, activIndex, articles, page,  status } = this.state; // isloading

      if (status === 'idle') {
        return (
          <div className="App" >
          <Searchbar onSearhFormSubmit={this.handleFormSubmit} page={page} />
          </div>
        );
      }

      if (status === 'pending') {
        return (
          <div className="App">
            <Searchbar onSearhFormSubmit={this.handleFormSubmit} page={page} />
            <Circles color="#ff0095" height={80} width={80} />
            <ImageGallery articles={articles} onImageClick={this.handleImageClick} />
          </div>
        );
      }

      if (status === 'resolved') {
        return (
          <div className="App">
            <Searchbar onSearhFormSubmit={this.handleFormSubmit} page={page} />
            <ImageGallery articles={articles} onImageClick={this.handleImageClick} />
            <Button onClickIncrementBtn={this.handleBtnIncrement} />
            {showModal && (
            <Modal onCloseModal={this.toggleModal}>
              <img src={activIndex.largeImageURL} alt={activIndex.tags} />
            </Modal>
            )}
          </div>
        );
      }

      
    
    
    // return (
    //   // <Box width="1200px" m="0 auto" p="0 20px">
    //   <div className="App">
    //     <Searchbar onSearhFormSubmit={this.handleFormSubmit} page={page} />
    //     {/* {isloading && <Circles color="#ff0095" height={80} width={80} />} */}
    //     <ImageGallery
    //       articles={articles}
    //       onImageClick={this.handleImageClick}
    //     />
    //     {articles.length > 0 && (
    //       <Button onClickIncrementBtn={this.handleBtnIncrement} />
    //     )}
    //     {showModal && (
    //       <Modal onCloseModal={this.toggleModal}>
    //         <img src={activIndex.largeImageURL} alt={activIndex.tags} />
    //       </Modal>
    //     )}
    //   </div>
    //   // </Box>
    // );
  }
}

export default App;
