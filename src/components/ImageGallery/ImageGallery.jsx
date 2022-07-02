import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledList } from './ImageGallery.styled';

const ImageGallery = ({ articles, onImageClick }) => {
  return (
    <StyledList>
      {articles.map(({ id, tags, webformatURL }, index) => {
        return (
          <ImageGalleryItem
            key={id}
            index={index}
            tags={tags}
            ImgUrl={webformatURL}
            onImageClick={onImageClick}
          />
        );
      })}
    </StyledList>
  );
};

ImageGallery.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ImageGallery;
