import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import landingImage from '../src/assets/landingimg1.png';

function App() {
  const shortCodeErrors = {
  "1" : "No URL specified",
  "2"	: "Invalid URL submitted",
  "3"	: "Rate limit reached. Wait a second and try again",
  "4"	: "IP-Address has been blocked because of violating our terms of service",
  "5"	: "shrtcode code (slug) already taken/in use",
  "6"	: "Unknown error",
  "7"	: "No code specified ('code' parameter is empty)",
  "8"	: "Invalid code submitted (code not found/there is no such short-link)",
  "9"	: "Missing required parameters",
  "10": "Trying to shorten a disallowed Link. More information on disallowed links"}



  const baseUrl = "https://api.shrtco.de/v2/shorten?url=";
  const [shortUrl, setShortUrl] = useState("");
  const [copyText, setCopyText] = useState("Copy")
  const [longUrl, setLongUrl] = useState("");
  const shortifyURL = async () => {
    let url = longUrl
    setCopyText("Copy")
    try{
      let response = await fetch(baseUrl+url);
      response = await response.json()
      if(response.ok){
        setShortUrl(response["result"]["full_short_link"])
      }
      else{
        let error_message = shortCodeErrors[response.error_code]
        if(error_message){

          toast.error(error_message)
        }
        else{
          toast.error("Invalid url")

        }

      }
      throw new Error(JSON.stringify(response))
    }
    catch(e){
      // NULLISH : if obj doesn't exist next part won't get executed!
      console.log(e?.message);
    }
  }

  const onCopy = () => {
    navigator.clipboard.writeText(shortUrl)
    setCopyText("Copied🎉")
  }



  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <li className='company'>Shortly</li>
          <span>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          </span>
          <span>
          <li>Login</li>
          <li>SignUp</li>

          </span>
        </nav>
        <div className='landingArea'>
          <section>
            <h1>More than just shorter links</h1>
            <small>Build your brand recognition and get detailed insights on how your links are performing!</small>
          </section>
          <img src={landingImage} alt='Landing Image' width="300"/>
        </div>

        <div className="ioBox">
          <img/>
          <input type='text' 
                  id='url'
                  placeholder='Paste link over here...'
                  value = {longUrl}
                  onChange= {(e) => setLongUrl(e.target.value)}
                  />
          <button onClick={shortifyURL}>Shorten it⚡</button>
        </div>
        <div className='ioBox'>
          {
            shortUrl.length < 1 && <p className='placeholder'>Shortened link appear over here...</p>
          }
          {
            shortUrl.length > 0 && <p>{shortUrl}</p>
          }
          <button onClick={() => onCopy()}>{copyText}</button>
        </div>

      </header>
      <ToastContainer/>  
    </div>
  );
}

export default App;
