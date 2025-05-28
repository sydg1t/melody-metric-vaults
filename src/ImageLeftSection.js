const ImageLeftSection = (props) => {


  return (
    <div id={props.id} className="row py-lg-5">
      <div className="col-4 img" style={{
        backgroundImage: `url(${props.item.imageURL})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 400,
        width: 400
      }}>

      </div>
      <div className="col-7 info fs-2 text-white d-flex flex-column justify-content-center">
        <ul className="">
          <li>{props.item.name}</li>
          <li>{props.item.artist}</li>
          <li>{props.item.releaseDate}</li>
          {(() => {
            if (props.item.bpm > 0) {
              return <li>BPM: {props.item.bpm}</li>
            }
          })()}

        </ul>
      </div>
    </div>
  )
}
export { ImageLeftSection };