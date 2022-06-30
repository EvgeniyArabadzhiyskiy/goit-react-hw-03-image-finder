// import axios from 'axios';
// import Button from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

class ImageGallery extends Component {
  state = {
    // query: '',
    // articles: [],
    // page: 1,
  };

  

//   async componentDidUpdate(prevProps, prevState) {


//     if (this.props.query !== prevProps.query || this.props.page !== prevProps.page) {
//         // console.log(this.state.page);
//         // this.setState({query: this.props.query})
//       const response = await axios(
//         `https://pixabay.com/api/?key=26298929-dc8db63efad38f2c4177a32d6&q=${this.props.query}&image_type=photo&page=${this.props.page}&per_page=12`
//       );

//         this.setState(prevState => ({articles: [...prevState.articles, ...response.data.hits]}))
//     }
//   }

//   handlebtnIncrement  = (e) => {
//      this.setState(prevState => ({page: prevState.page + 1}))
//   };


  render() {
    return <ul className='ImageGallery'>
        {this.props.articles.map(({id, tags, webformatURL}) => {
           return <ImageGalleryItem key={id} id={id} tags={tags} ImgUrl={webformatURL} onImageClick={this.props.onImageClick} />
        })}
         
        {/* { this.state.articles.length > 0 && <Button onClickBtnIncrement={this.handlebtnIncrement} />} */}
    </ul>;
  }
}

export default ImageGallery;
