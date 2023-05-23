import { useState } from "react";
import NavBar from "./components/Nav/NavBar";
import Image_link from "./components/Link_form/Image_link";
import User_info from "./components/User_info/User_info";
import "./components/User_info/User_info.css";
import "./index.css"
import Face_recon from "./components/Face_recon/Face_recon";


function App() {

  const [imageUrl,setImageUrl] = useState("")
  const [isValid,setIsValid] = useState()


  const returnClarifaiRequestOptions= () => {
    const PAT = '9e85fc14c9154e0c80466f5afd20aef6';
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = 'tommy001';       
    // Change these to whatever model and image URL you want to use
    // const MODEL_ID = 'face_detection';   


    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, model details, and the URL
    // of the image we want as an input. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope       
    const APP_ID = 'my_first_app';
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'food-item-recognition';
    const MODEL_VERSION_ID = '1d5fd481e0cf4826aa72ec3ff049e044';    
    const IMAGE_URL = 'https://s23209.pcdn.co/wp-content/uploads/2022/07/220602_DD_The-Best-Ever-Cheeseburger_267-760x1140.jpg';

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  }

  

  const handleSubmit = (e) =>{
    e.preventDefault()
    returnClarifaiRequestOptions()
  }

  return (
    <main>
      <NavBar />
      <User_info />
      <Image_link 
          onUrlChange={(e) => setImageUrl(e.target.value)}
          handleSubmit={handleSubmit}
          imageUrl={imageUrl}
          />
      <Face_recon />
      
      
    </main>
  );
}

export default App;
