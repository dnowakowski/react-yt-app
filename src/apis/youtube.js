import axios from 'axios';

const KEY = 'AIzaSyDgHlwiMqrFfx7_0wCcOtr8Q9__scBcHBc';

const baseURL = 'https://www.googleapis.com/youtube/v3';


export default axios.create({
    baseURL,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video' //warnings
    }
})