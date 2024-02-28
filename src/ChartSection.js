import React, { useState, useEffect } from 'react';
const ChartSection = (props) => {



  return (
    <div className='row'>
      <div className='col-6'>
      <ol>
        {props.array.map((artist, index) => {
          return <h2 key={index}><li>{artist.name}</li></h2>
        })}
        
      </ol>
      </div>
    </div>
  )
}
export { ChartSection };