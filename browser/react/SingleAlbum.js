import React, { Component } from 'react';

export default class SingleAlbum extends Component {

  render () {
  console.log("INSIDE SINGLE ALBUM", this.props)
    return (
      <div className="album col-xs-10">
        <div>
          <h3>{this.props.album.name || "Placeholder"}</h3>
          <img src={this.props.album.imageUrl || "https://placeholdit.imgix.net/~text?txtsize=33&txt=IshouldBEanIMAGE&w=300&h=300"}className="img-thumbnail" />
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Artists</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {this.props.album.songs ? this.props.album.songs.map(song => {
              return (
                <tr>
                  <td>
                    <button className="btn btn-default btn-xs">
                      <span className="glyphicon glyphicon-play"></span>
                    </button>
                  </td>
                  <td>{song.name}</td>
                  <td>{song.artists[0].name}</td>
                  <td>{song.genre}</td>
                </tr>
              )
            }) : null }
          </tbody>
        </table>
      </div>
    )
  }
}
