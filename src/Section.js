import React, { useState, useEffect } from 'react';
import { RowSection } from './RowSection';
import { ChartSection } from './ChartSection';
import { ImageLeftSection } from './ImageLeftSection';
const Section = (props) => {
  const [selectedTrack, setSelectedTrack] = useState([]);



  return (

    <div id={props.id} className='col-12 section dark-blue text-white'>
      <h1 className='mb-5'>{props.title}</h1>
      {(() => {

        if (props.id === 'popular-tracks' || props.id === 'popular-albums') {
          return <RowSection array={props.array} />
        } else {
          return <ChartSection array={props.array} />
        }

      })()}
    </div>
  )
}
export { Section };