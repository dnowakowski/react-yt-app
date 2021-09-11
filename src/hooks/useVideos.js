import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);


    const search = async (value) => {
        const results = await youtube.get('/search', {
            params: {
                q: value
            }
        })
        
        setVideos(results.data.items);

        //setSelectedVideo(results.data.items[0]);
        
        //onVideoSelect(selectedVideo);
    };

    return [videos, search];
};

export default useVideos;