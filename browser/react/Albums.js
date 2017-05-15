import React, { Component } from 'react';

export default class Album extends Component {
  render () {
    console.log(this.props)
    return (
      <div className="col-xs-4">
        <a className="thumbnail" href="#" onClick={() => this.props.handleClick(this)}>
          <img src={this.props.album.imageUrl} />
          <div className="caption">
            <h5>
              <span>{this.props.album.name}</span>
            </h5>
            <small>{`${this.props.album.songs.length} songs`}</small>
          </div>
        </a>
      </div>
    )
  }
}
