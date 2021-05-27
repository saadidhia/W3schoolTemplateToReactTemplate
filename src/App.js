
import './App.css';

import React, { useEffect } from 'react';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer'
import Header from './Layout/Header'
import Contact from './User/Contact'
import Pricing from './Components/Pricing'
import TeamAvatar from './User/TeamAvatar'
import Work from "./Components/Work"
import {Service} from './Services/Service'

import PlusNavbar from './Components/PlusNavbar'

export const offreContext =React.createContext();

function App() {

 //React.useEffect(()=>Service)

 const offreArray =[{
    "offreName":"Basic",
    "stockage":"10GB",
    "email":10,
    "supportDomaine":10,
    "typeSupport":"endless",
    "price":10
},
{
    "offreName":"Pro",
    "stockage":"25GB",
    "email":25,
    "supportDomaine":25,
    "typeSupport":"endless",
    "price":25
},{
    "offreName":"Premium",
    "stockage":"50GB",
    "email":50,
    "supportDomaine":50,
    "typeSupport":"Endless",
    "price":50
}]

  return (

    <React.Fragment>
      <Navbar />
      <Header />




      <div className="w3-display-container w3-animate-opacity">
        <img src="/w3images/sailboat.jpg" alt="boat" style={{ width: "100%", minHeight: "350px", maxHeight: "600px" }} />
        <div className="w3-container w3-display-bottomleft w3-margin-bottom">
          <button onClick="document.getElementById('id01').style.display='block'" className="w3-button w3-xlarge w3-theme w3-hover-teal" title="Go To W3.CSS">LEARN W3.CSS</button>
        </div>
      </div>


      <div id="id01" className="w3-modal">
        <div className="w3-modal-content w3-card-4 w3-animate-top">
          <header className="w3-container w3-teal w3-display-container">
            <span onClick="document.getElementById('id01').style.display='none'" className="w3-button w3-teal w3-display-topright"><i class="fa fa-remove"></i></span>
            <h4>Oh snap! We just showed you a modal..</h4>
            <h5>Because we can <i className="fa fa-smile-o"></i></h5>
          </header>
          <div className="w3-container">
            <p>Cool huh? Ok, enough teasing around..</p>
            <p>Go to our <a className="w3-text-teal" href="/w3css/default.asp">W3.CSS Tutorial</a> to learn more!</p>
          </div>
          <footer className="w3-container w3-teal">
            <p>Modal footer</p>
          </footer>
        </div>
      </div>


      <TeamAvatar />

      <Work />

      <PlusNavbar />
      <offreContext.Provider value={offreArray }>
      
      <Pricing />
      </offreContext.Provider>

      <Contact />


      <img src="/w3images/map.jpg" className="w3-image w3-greyscale-min" style={{ width: "100%" }} />


      <Footer />





    </React.Fragment>
  )

}

export default App;
