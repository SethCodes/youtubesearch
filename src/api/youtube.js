import axios from 'axios';

const KEY = 'AIzaSyBQdq7lQLDARC_4Vh3xn7GWWilQSV3Q7aM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5, 
        key: KEY
    }
});