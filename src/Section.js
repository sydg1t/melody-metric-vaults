import React, { useState, useEffect } from 'react';
const Section = (props) => {



  
  return (

    <div id={props.id} className='col-12 section dark-blue img-row text-white'>
      <h1 className='mb-5'>{props.title}</h1>
      <div className='row flex-nowrap overflow-x-scroll'>
        {props.array.map((item, index) => {
          return (
            <div key={index} className='col-2'>
              <div className='.bg-image'
                style={{
                  backgroundImage: `url(${item.imageURL})`,
                  height: 250,
                  width: 250
                }}>
              </div>
              <p className='fs-1'>{item.name}<br />{item.artist}<br />#{item.position} on Deezer Chart</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}
export { Section };