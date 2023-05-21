import React from 'react'

const Image_link = ({onUrlChange, handleSubmit, imageUrl}) => {
  return (
    <div>
      <form className='image_form' onSubmit={handleSubmit}>
          <label htmlFor='add_image_url'>add Image url here</label>
          <input
                type="text" 
                id="url_input"
                className="url_input" 
                placeholder='Please enter url of picture'
                onChange={onUrlChange}
                
          />

          <button type='submit'>Detect</button>
      </form>
      <section>
          <img src={imageUrl}></img>
      </section>
    </div>  
  
  )
}

export default Image_link
