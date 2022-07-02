import PropTypes from "prop-types";
import {GalleyImg, StyledItem} from './ImageGalleryItem.styled'

const ImageGalleryItem = ({ index, tags, ImgUrl, onImageClick }) => {
  return (
    <div>
      <StyledItem >
        <GalleyImg
          src={ImgUrl}
          alt={tags}
          onClick={() => onImageClick(index)}
        />
      </StyledItem>
    </div>
  );
};

ImageGalleryItem.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  ImgUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ImageGalleryItem;
