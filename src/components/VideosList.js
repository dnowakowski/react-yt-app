import React from 'react';
import VideoItem from './VideoItem';

const VideosList = ({videos, onVideoSelect, selectedVideo}) => {
    const renderedList = videos.map((video) => {
        if(video != selectedVideo)
        return <VideoItem onVideoSelect = {onVideoSelect} key = {video.id.videoId} data = {video} />
    });

    return <div className = "ui relaxed divided list">{renderedList}</div>
}

export default VideosList;
