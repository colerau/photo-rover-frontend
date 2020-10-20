import React, { Component } from 'react';
import App from '../App';
import Photo from '../components/Photo';

class PhotosList extends Component {
  render() {
    return(
      <div>
        <h1>
          Today's Photos
        </h1>

        <ul>
          {this.props.photos && this.props.photos.map((photo) => (
            <Photo photo={photo} />
          ))}
        </ul>
      </div>
    );
  }
};

export default PhotosList;