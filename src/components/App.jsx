import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Box from './Box/Box';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from 'service/pixabay-api';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    page: 1,
    query: '',
    articles: [],
    showModal: false,
    activIndex: null,
    isloading: false,
    error: null,
  };

   totalHits = null

  async componentDidUpdate(_, prevState) {
    const searchQuery = this.state.query;
    const searchPage = this.state.page;

    if (searchQuery !== prevState.query || searchPage !== prevState.page) {
      
      try {
        this.setState({ isloading: true });
        const imageData = await fetchImages(searchQuery, searchPage);

        this.totalHits = imageData.total

        const imagesHits = imageData.hits;
        
        if (imagesHits.length === 0) {
          toast.warning("No results were found for your search, please try something else.",
           {transition: Zoom})
          return
        }

        this.setState(({articles}) => ({articles: [...articles, ...imagesHits]}));

      } catch (error) {
        this.setState({ error: new Error("Sorry something went wrong")});
      } finally {
        this.setState({ isloading: false });
      }
    }
  }

  handleFormSubmit = text => {
    this.setState({ query: text.trim(), page: 1, articles: [] });
  };

  handleLoadMore = e => {
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
    const { showModal, activIndex, articles, page, isloading, error } = this.state; 
    const countImages = articles.length
   
    if (error) {
      toast.error(this.state.error.message)
    }

    return (
  
      <Box display="grid" gridAutoColumns="1fr" gridGap="16px" pb={6} >
        <Searchbar  onSearhFormSubmit={this.handleFormSubmit} page={page} />
        
        {isloading && <Loader />}
        
        {countImages > 0 && <ImageGallery articles={articles}  onImageClick={this.handleImageClick} />}

        { (countImages > 0 && countImages !== this.totalHits) && <Button onLoadMore={this.handleLoadMore} />}

        {countImages === this.totalHits && <Notification /> }

        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img src={activIndex.largeImageURL} alt={activIndex.tags} />
          </Modal>
        )}

        <ToastContainer autoClose={3000}  position="top-center" theme="colored" pauseOnHover  />
      </Box>
      
    );

  }
}

export default App;










// if (status === 'idle') {
//   return (
//     <div className="App" >
//     <Searchbar onSearhFormSubmit={this.handleFormSubmit} page={page} />
//     </div>
//   );
// }

// if (status === 'pending') {
//   return (
//     <div className="App">
//       <Searchbar onSearhFormSubmit={this.handleFormSubmit} page={page} />
//       <Circles color="#ff0095" height={80} width={80} />
//       <ImageGallery articles={articles} onImageClick={this.handleImageClick} />
//     </div>
//   );
// }

// if (status === 'resolved') {
//   return (
//     <div className="App">
//       <Searchbar onSearhFormSubmit={this.handleFormSubmit} page={page} />
//       <ImageGallery articles={articles} onImageClick={this.handleImageClick} />
//       <Button onClickIncrementBtn={this.handleBtnIncrement} />
//       {showModal && (
//       <Modal onCloseModal={this.toggleModal}>
//         <img src={activIndex.largeImageURL} alt={activIndex.tags} />
//       </Modal>
//       )}
//     </div>
//   );
// }


