import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClickImage }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          onClick={() => onClickImage(image.largeImageURL, image.tags)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  onClickImage: PropTypes.func,
  images: PropTypes.array,
};
