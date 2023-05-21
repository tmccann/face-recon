import { useState } from "react";
import NavBar from "./components/Nav/NavBar";
import Image_link from "./components/Link_form/Image_link";
import User_info from "./components/User_info/User_info";
import "./components/User_info/User_info.css";
import "./index.css"



function App() {

  const [imageUrl,setImageUrl] = useState("")

  const returnClarifaiRequestOptions= (ImageUrl) => {
    const PAT = '5a0846aa2cd647ad86b571c464cb3c13';
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = 'thoyvo';       
    const APP_ID = 'face_detection';
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'face_detection';   
    const IMAGE_URL = ImageUrl;

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


    return requestOptions
  } 
    const handleSubmit= (e) =>{
      e.preventDefault()
      console.log(imageUrl)

    }
  

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id
      const imageData = () =>{
        fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", returnClarifaiRequestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      }
  return (
    <main>
      <NavBar />
      <User_info />
      <Image_link 
          // ImageUrl = {ImageUrl}
          // setImageUrl = {setImageUrl}
          onUrlChange={(e) => setImageUrl(e.target.value)}
          handleSubmit={handleSubmit}
          imageUrl={imageUrl}
           />
      
      
    </main>
  );
}

export default App;
