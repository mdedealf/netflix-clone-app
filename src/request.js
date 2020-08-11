const API_KEY = 'b99d54e818645a77afb2c488dd92d731';

const request = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetechTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetechActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetechComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetechHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetechRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetechDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default request;
