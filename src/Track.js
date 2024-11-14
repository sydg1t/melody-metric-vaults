import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { ImageLeftSection } from './ImageLeftSection';
const Track = (props) => {
  const [track, setTrack] = useState({})
  let {trackId} = useParams();
  const getTrack = () => {
    fetch(`http://localhost:5000/api/track/${trackId}`).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request was either a 404 or 500');
    }).then((results) => {
      console.log(results);
      const trackObj = {
        type: "track",
        name : results.title,
        artist: results.artist.name,
        releaseDate: results.release_date,
        bpm: results.bpm,
        imageURL : results.album.cover_big
      }
      setTrack(trackObj);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect (() =>{
    getTrack();
  },[]);

  return (
    <div className='container-fluid'>
      <div className='row dark-blue'>
        <ImageLeftSection id='image-left-section' item={track} />
      </div>
    </div>


  )
}
export { Track };