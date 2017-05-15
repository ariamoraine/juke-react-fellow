import React, { Component } from 'react';

export default class Album extends Component {
  render () {
    console.log(this.props)
    return (
      <div className="col-xs-4" key={this.props.album.id}>
        <a className="thumbnail" href="#">
          <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
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
