import React, { useState, useEffect } from 'react';
const Section = (props) => {




  return (
    <div id={props.id} className='col-12 section dark-blue img-row text-white'>
      <h1 className='mb-5'>{props.title}</h1>
      <div className='col-2'>
        <div className='img-box bg-black'></div>
        <p className='fs-1'>{props.name}<br />{props.artist}<br/>{props.chartPosition}</p>
      </div>
    </div>
  )
}
export { Section };