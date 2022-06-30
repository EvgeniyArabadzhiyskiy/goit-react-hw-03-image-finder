const ImageGalleryItem = ({ id, tags, ImgUrl, onImageClick }) => {
  return (
    <div>
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={ImgUrl}
          alt={tags}
          onClick={() => onImageClick(id)}
        />
      </li>
    </div>
  );
};

export default ImageGalleryItem;
