import React from 'react'

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, model details, and the URL
    // of the image we want as an input. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Your PAT (Personal Access Token) can be found in the portal under Authentification

  


const Face_recon = ({imageUrl}) => {
  return (
    <section>
      <img src={imageUrl} />
    </section>
  )
}

export default Face_recon

