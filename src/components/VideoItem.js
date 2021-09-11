import React from 'react';
import VideoDetail from './VideoDetail';
import './VideoItem.css';

const VideoItem = ({data, onVideoSelect}) => {
    return (
        <div onClick= {(e) => onVideoSelect(data)} className = "video-item item">
            <img alt = {data.snippet.title} className = "ui image" src = {data.snippet.thumbnails.medium.url}/>
                <div className = "content">
                    <div className = "header">{data.snippet.title} </div>
                </div>
        </div>
    )
}

export default VideoItem