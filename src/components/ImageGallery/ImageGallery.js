import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ articles, onImageClick }) => {
  return (
    <ul className="ImageGallery">
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
    </ul>
  );
};

export default ImageGallery;
