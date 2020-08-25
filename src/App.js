import React from 'react';
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';
import request from './requests/request';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />

      <Banner />

      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={request.fetchTreding} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
