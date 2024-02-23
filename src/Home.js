import React, { useState, useEffect } from 'react';
import {Section} from './Section';

const Home = () => {
  const [tracks, setTracks] = useState([{
    name: 'ATM',
    artist: 'J.Cole',
    position: 1,
  }]);
  const getTracks = () => {
    fetch(`https://api.deezer.com/chart/tracks`).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error ('Request was either a 404 or 500');
    }).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    })
  }
  useEffect(() => {}, [getTracks()])
  
  return (
    <div className='container-fluid'>
      <div className="row">
        <div id='search-div' className='col-5 light-blue align-items-center'>
          <h1 className='mb-5'>Analytics for <span className='text-white'>Songs</span> <br /> and <span className='text-white'>Artists</span></h1>
          <p className='fs-1 my-5'>Search a song or artist <br />for stream data</p>
          <input className='w-100 py-3 px-2 mt-3 fs-2' placeholder='Search'></input>
        </div>
        <Section id='popular-tracks' title='Most Popular Tracks' name={tracks.name} artist={tracks.artist} chartPosition={tracks.position}></Section>
        {/* <div id='popular-tracks' className='col-12 section dark-blue img-row text-white'>
          <h1 className='mb-5'>Most Popular Tracks</h1>
          <div className='col-2 '>
            <div className='img-box bg-black'></div>
            <p className='fs-1'>Artist Name <br />Chart Position</p>
          </div>
        </div> */}
        <div id='popular-albums' className='col-12 section darkest-blue text-white'>
          <h1 className='mb-5'>Most Popular Albums</h1>
          <div className='col-6 album-list'>
            
            <p className='fs-1'>Artist Name <br />Chart Position</p>
          </div>
        </div>
        <div id='popular-artists' className='col-12 section dark-blue img-row text-white'>
          <h1 className='mb-5'>Most Popular Tracks</h1>
          <div className='col-2 '>
            <div className='img-box bg-black'></div>
            <p className='fs-1'>Artist Name <br />Chart Position</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;