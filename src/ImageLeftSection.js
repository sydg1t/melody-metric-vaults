const ImageLeftSection = (props) => {


  return (
    <div id={props.id} className="row py-5">
      <div className="col-4 img" style={{
        backgroundImage: `url(${props.track.imageURL})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 400,
        width: 400
      }}>

      </div>
      <div className="col-7 info fs-2 text-white d-flex flex-column justify-content-center">
        <ul className="">
          <li>{props.track.name}</li>
          <li>{props.track.artist}</li>
          <li>{props.track.releaseDate}</li>
          {(() => {
            if (props.track.bpm > 0) {
              return <li>BPM: {props.track.bpm}</li>
            }
          })()}

        </ul>
      </div>
    </div>
  )
}
export { ImageLeftSection };