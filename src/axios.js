import axios from 'axios';

// Base url to make requests to the movie db
const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});

export default instance;
