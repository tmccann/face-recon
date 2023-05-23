import React from 'react'

const Image_link = ({onUrlChange, handleSubmit}) => {
  return (
      <form className='image_form'>
          <label htmlFor='add_image_url'>add Image url here</label>
          <input
                type="text" 
                id="url_input"
                className="url_input" 
                placeholder='Please enter url of picture'
                onChange={onUrlChange}
                
          />

          <button type='text' onClick={handleSubmit}>Detect</button>
      </form>
  
  )
}

export default Image_link

