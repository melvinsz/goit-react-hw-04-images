import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className="gallery-item">
      <img src={src} alt={alt} onClick={onClick} />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
