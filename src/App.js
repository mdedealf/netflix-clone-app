import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';

function App() {
	return (
		<div className="app">
      {/* Nav */}

      {/* Banner */}
      <Banner />
      
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={request.fetchNetflixOriginals} 
        isLargeRow={true}
      />
			<Row title="Trending Now" fetchUrl={request.fetchTrending} />
			<Row title="Top Rated" fetchUrl={request.fetechTopRated} />
			<Row title="Action Movies" fetchUrl={request.fetechActionMovies} />
			<Row title="Comedy Movies" fetchUrl={request.fetechComedyMovies} />
			<Row title="Horror Movies" fetchUrl={request.fetechHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={request.fetechRomanceMovies} />
			<Row title="Romance Movies" fetchUrl={request.fetechDocumentaries} />
		</div>
	);
}

export default App;
