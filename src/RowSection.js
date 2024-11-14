import React, { useState, useEffect } from 'react';
import {TrackPage} from './Track';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
const RowSection = (props) => {
  let { trackId, albumId } = useParams();
  
  
  return (
    <div className='row flex-nowrap overflow-x-scroll'>
      {props.array.map((item, index) => {
        return (
        
        <div key={index} className='col-xxl-2 col-md-5 col-10'>
          {(() => {if (props.array[0].type === "track") {
            return (<Link to={`/track/${trackId = item.id}`} className='text-decoration-none text-white' >
            <div className='.bg-image'
              style={{
                backgroundImage: `url(${item.imageURL})`,
                height: 250,
                width: 250
              }}>
            </div>
            <p className='fs-1'>{item.name}<br />{item.artist}<br />#{item.position} on Deezer Chart</p>
            </Link>)
          }
          else {
            return (<Link to={`/album/${albumId = item.id}`} className='text-decoration-none text-white' >
                <div className='.bg-image'
                style={{
                  backgroundImage: `url(${item.imageURL})`,
                  height: 250,
                  width: 250
                }}>
                </div>
              <p className='fs-1'>{item.name}<br />{item.artist}<br />#{item.position} on Deezer Chart</p>
            </Link>)
          }
        })()}
        </div>
        
        )
      })}
    </div>
  )
}
export { RowSection };