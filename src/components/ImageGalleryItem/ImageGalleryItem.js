const ImageGalleryItem = ({ index, tags, ImgUrl, onImageClick }) => {
  return (
    <div>
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={ImgUrl}
          alt={tags}
          onClick={() => onImageClick(index)}
        />
      </li>
    </div>
  );
};

export default ImageGalleryItem;
