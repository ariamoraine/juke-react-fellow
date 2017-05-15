import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Albums from './Albums';

export default class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
      albums: [
        {
          name: 'Abbey Road',
          id: 1,
          imageUrl: 'http://fillmurray.com/300/300',
          songs: [
            {
              id: 1,
              name: 'Romeo & Juliette',
              artists: [
                { name: 'Bill' }
              ],
              genre: 'Funk',
              audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
            },
            {
              id: 2,
              name: 'White Rabbit',
              artists: [
                { name: 'Bill' },
                { name: 'Alice' }
              ],
              genre: 'Fantasy',
              audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
            },
            {
              id: 3,
              name: 'Lucy in the Sky with Diamonds',
              artists: [
                { name: 'Bob' }
              ],
              genre: 'Space',
              audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
            }
          ]
        },
        {
          name: 'Yellow Submarine',
          id: 2,
          imageUrl: 'http://fillmurray.com/300/300',
          songs: [
            {
              id: 4,
              name: 'London Calling',
              artists: [
                { name: 'Bill' }
              ],
              genre: 'Punk',
              audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
            }
          ]
        }
      ]
    }
  }

  render () {
    console.log(this.state.albums[0]);
    return (
      <div id='main' className='container-fluid'>
        <Sidebar />
        <div className="col-xs-10">
        <h3>Albums</h3>
        <div className="row">
        {
          this.state.albums.map(album => {
            return (<Albums album={album} />)
          })
        }
        </div>
        </div>
        <Footer />
      </div>
    );
  }

}
      //  <h1 className="col-xs-10">{this.state.albums.map(album => {
       //   return album.name;
       // })}</h1>
