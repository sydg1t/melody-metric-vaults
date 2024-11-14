import React, { useState, useEffect } from 'react';
import { Section } from './Section';






const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  
  
  
  const fillArrays = () => {
    
    fetch(`http://localhost:5000/api`).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request was either a 404 or 500');
    }).then((results) => {
      console.log(results);
      const trackArr = results.tracks.map((track) => {
        return {
          type: "track",
          name: track.name,
          id: track.id,
          artist: track.artist,
          position: track.position,
          imageURL: track.imageURL,
        }
      });
      const albumArr = results.albums.map((album) => {
        return {
          type: "album",
          name: album.name,
          id: album.id,
          artist: album.artist,
          position: album.position,
          imageURL: album.imageURL
        }
      })

      const artistArr = results.artists.map((artist) => {
        return {
          type: "artist",
          name: artist.name,
          position: artist.position,
          id: artist.id,
          fans: 0
        }
      })

      setArtists(artistArr);
      setAlbums(albumArr);
      setTracks(trackArr);
    }).catch((error) => {

      console.log(error);
      setTimeout(() => {
        console.log(response.ok);
      }, 5000)
    })
  }


  useEffect(() => {
    fillArrays();
  }, []);





  const clearArrays = () => {
    setArtists([]);
    setAlbums([]);
    setTracks([]);
  }
  return (
    <div className='container-fluid'>
      <div className="row">
        <div id='search-div' className='col-md-8 light-blue align-items-center'>
          <h1 className='mb-5 d-xs-none'>Analytics for 
            <span className='text-white'> Songs</span> 
            <br /> and <span className='text-white'>Artists</span></h1>
          <p className='fs-1 my-5'>Search a song or artist <br />for stream data</p>
          <input className='w-100 py-3 mb-2 px-2 mt-3 fs-2' placeholder='Search'></input>
        </div>
        <Section id='popular-tracks' title='Most Popular Tracks' array={tracks}></Section>
        <Section id='popular-artists' title='Most Popular Artists' array={artists}></Section>
        <Section id='popular-albums' title='Most Popular Albums' array={albums}></Section>

      </div>
    </div>
  )
}

export default Home;