import React, { useState, useEffect } from 'react';
const ChartSection = (props) => {



  return (
    <div className='row'>
      <div className='col-md-6 ms-2'>
      <ol className='ms-3'>
        {props.array.map((artist, index) => {
          return <h2 key={index}><li>{artist.name}</li></h2>
        })}
        
      </ol>
      </div>
    </div>
  )
}
export { ChartSection };