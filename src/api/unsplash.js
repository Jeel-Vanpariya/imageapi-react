import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID rvghKW3HnP_7QbsHG1pBtXm8vYweQpUa0UiVDpM7Oow'
    }
});