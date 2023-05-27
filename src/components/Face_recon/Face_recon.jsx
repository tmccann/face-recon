  import React from 'react'
  import './face_recon.css'

 
  const Face_recon = ({imageUrl, box}) => {
    return (
      <section className='image_container'>
        <img id='displayedImage' src={imageUrl} />
        <div box={box} className='boundingbox' style={{top: box.topRow,
           right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </section>
    )
  }

  export default Face_recon

