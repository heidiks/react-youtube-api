import React, { Component } from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const video = this.props.video;
        const imageURL = this.props.video.snippet.thumbnails.default.url;
        return (
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageURL}/>
                    </div>
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </li>
        );
    }
}

export default VideoListItem;
