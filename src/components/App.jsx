import React, { Component } from 'react';
import { ColorRing } from 'react-loader-spinner';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const API_KEY = '34746416-8804c3e057cfbf229fa5fe7fd';

class App extends Component {
  state = {
    value: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    largeImageURL: '',
    alt: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value, page: 1 });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value !== '') {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(data => {
          this.setState({ images: data.hits, loading: false });
        })
        .catch(error => {
          console.log(error.message);
          this.setState({ loading: false });
        });
    } else return;
  };

  handleClick = event => {
    event.preventDefault();
    if (this.state.images.length > 0) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.value}&page=${
          this.state.page + 1
        }&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(data => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            page: prevState.page + 1,
            loading: false,
          }));
        })
        .catch(error => {
          console.log(error.message);
          this.setState({ loading: false });
        });
    } else return;
  };

  handleOpenModal = (largeImageURL, alt) => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
      alt: alt,
    });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { loading, images, showModal, largeImageURL, alt } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSubmit} onChange={this.handleChange} />
        {loading && (
          <div className="loader">
            <ColorRing />
          </div>
        )}
        <ImageGallery images={images} onClickImage={this.handleOpenModal} />
        {images.length > 0 && <Button onClick={this.handleClick} />}
        <Modal
          showModal={showModal}
          onClose={this.handleCloseModal}
          src={largeImageURL}
          alt={alt}
        />
      </div>
    );
  }
}

export default App;
