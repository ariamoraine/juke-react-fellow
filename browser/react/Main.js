import React, { Component } from 'react';
import axios from 'axios';

import Sidebar from './Sidebar';
import Footer from './Footer';
import Albums from './Albums';
import SingleAlbum from './SingleAlbum'

export default class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {}
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (album) {
    console.log("INSIDE CLICK", album);
    // this.setState({selectedAlbum: event})
    axios.get(`/api/albums/${album.id}`)
    .then(res => res.data)
    .then(album => {
      album.imageUrl = `/api/albums/${album.id}/image`;
      this.setState({ selectedAlbum: album })
    }
    );
  }

  componentDidMount () {
    axios.get('/api/albums')
    .then(res => {
      return res.data;
    })
    .then(albumsFromServer => {
      albumsFromServer = albumsFromServer.map(album => {
        album.imageUrl = `/api/albums/${album.id}/image`;
        return album;
      });
      this.setState({ albums: albumsFromServer });
    })
    .catch(console.log);
  }

  render () {
    console.log("selected", this.state.selectedAlbum)
    return (
      <div id='main' className='container-fluid'>
        <Sidebar />
        <div className="col-xs-10">
          {this.state.selectedAlbum.id ? <SingleAlbum album={this.state.selectedAlbum}/> :
          <div>
            <h3>Albums</h3>
            <div className="row">
            {
              this.state.albums.map(album => {
                return (<Albums album={album} handleClick={this.handleClick} key={album.id} />)
              })
            }
            </div>
          </div>
        }

        </div>
        <Footer />
      </div>
    );
  }

}
      //  <h1 className="col-xs-10">{this.state.albums.map(album => {
       //   return album.name;
       // })}</h1>
