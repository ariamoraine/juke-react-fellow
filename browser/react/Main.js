import React, { Component } from 'react';
import axios from 'axios';

import Sidebar from './Sidebar';
import Footer from './Footer';
import Albums from './Albums';
import SingleAlbum from './SingleAlbum'
const audio = document.createElement('audio');

export default class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {}
    };

    this.handleClick = this.handleClick.bind(this);
    this.selectedAlbumReset = this.selectedAlbumReset.bind(this);
    this.startPlaying = this.startPlaying.bind(this)
  }

  selectedAlbumReset () {
    console.log("INSIDE RESET");
    this.setState({selectedAlbum: {}});
  }

  startPlaying (song) {
    console.log(song)
    axios.get(`api/songs/${song.id}/audio`)
    .then(results => console.log("data", results));
    audio.src = 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3';
    audio.load();
    audio.play();
  }

  handleClick (album) {
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
    return (
      <div id='main' className='container-fluid'>
        <Sidebar reset={this.selectedAlbumReset} />
        <div className="col-xs-10">
          {this.state.selectedAlbum.id ? <SingleAlbum album={this.state.selectedAlbum} startPlaying={this.startPlaying} /> :
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
