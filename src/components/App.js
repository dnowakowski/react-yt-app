import React, {useState, useEffect} from 'react';
import Searchbar from './Searchbar';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

let count = 0;
const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);

    const [videos, search] = useVideos("Kendrick Lamar");


    useEffect(() => {
        
        setSelectedVideo(videos[0]);
    }, [videos]);


    return(
        <div className = "ui container">
            <Searchbar updateSearchedText = {search}/>
            <div className = "ui grid"> 
                <div className = "ui row"> 
                <div className = "eleven wide column">
                    <VideoDetail video = {selectedVideo} />
                </div>
                <div className = "five wide column">

                    <VideosList selectedVideo = {selectedVideo} onVideoSelect = { setSelectedVideo} videos = {videos}/>
                </div>
                </div>
            </div>
            
        </div>
        )
};

/*
class App extends React.Component{

    state = {searchedText: '', videos: [], selectedVideo: null}


}
*/

export default App;