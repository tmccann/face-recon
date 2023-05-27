import { useState } from "react";
import NavBar from "./components/Nav/NavBar";
import Image_link from "./components/Link_form/Image_link";
import User_info from "./components/User_info/User_info";
import "./components/User_info/User_info.css";
import "./index.css"
import Face_recon from "./components/Face_recon/Face_recon";


function App() {

  const [imageUrl,setImageUrl] = useState('')
  const [box,setBox] = useState({})




  const returnClarifaiRequestOptions= () => {
    const PAT = '9e85fc14c9154e0c80466f5afd20aef6';
    const USER_ID = 'tommy001';         
    const APP_ID = 'my_first_app';
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
    const IMAGE_URL = imageUrl;
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

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(res =>{
          displayFaceBox(calculateFaceLocation(res))
        })

        .catch(error => console.log('error', error));
  }

    const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('displayedImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
    const displayFaceBox = (box) => {
    setBox(box)
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
      <Face_recon 
        imageUrl={imageUrl}
        box={box}
      />
      
      
    </main>
  );
}

export default App;
