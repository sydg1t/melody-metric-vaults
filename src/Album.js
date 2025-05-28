import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { ImageLeftSection } from './ImageLeftSection';
const Album = (props) => {
    const [album, setAlbum] = useState();
    const {albumId} = useParams();
    const getAlbum = () => {
         fetch(`http://localhost:5000/api/album/${albumId}`).then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Request was either a 404 or 500');
        }).then((results) => {
          console.log(results);
          const albumObj = {
            type: "album",
            name : results.title,
            id: results.id,
            artist: results.artist.name,
            releaseDate: results.release_date,
            imageURL : results.cover_big
          }
          setAlbum(albumObj);
          console.log(albumObj);
        }).catch((error) => {
          console.log(error);
        })
      }
    
      useEffect (() =>{
        getAlbum();
      },[]);

    return (
        <div className='container-fluid'>
            <div className='row dark-blue'>
              {(() => {
                if (album) {
                  return (
                    <ImageLeftSection id='image-left-section' item={album} />
                  )
                }
              })()}
                
            </div>
        </div>
    )
}
export {Album};