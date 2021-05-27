import React,{ Fragment } from "react";
import Service from '../Services/Service'
import PlusNavbar from '../Components/PlusNavbar'
import axios  from "axios";
class Header extends React.Component{

    constructor(){
        
    super()
        axios.post('http://jsonplaceholder.typicode.com/posts/1',{ 
        
          title:"add post",
         

        }).then(res=>console.log(res))
        .catch(error=>console.log(error))
   



    }


    openNav() {
        var x = document.getElementById("navDemo");

        if (x.className.indexOf("w3-show") === -1) {
          x.className += " w3-show";
          document.getElementById("mySidebar").style.display = "none";
        } else { 
          x.className = x.className.replace(" w3-show", "");
        }
      }
    render(){
        return(
            <Fragment>
                <div className="w3-top">
 <div className="w3-bar w3-theme-d2 w3-left-align">
  <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2" href="javascript:void(0)" onClick={this.openNav}><i className="fa fa-bars"></i></a>
   <PlusNavbar />
  <a href="#dd" className="w3-bar-item w3-button w3-teal"><i className="fa fa-home w3-margin-right"></i>Logo</a>
  <a href="#team" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Team</a>
  <a href="#work" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Work</a>
  <a href="#pricing" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Price</a>
  <a href="#contact" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Contact</a>
    <div className="w3-dropdown-hover w3-hide-small">
    <button className="w3-button" title="Notifications">Dropdown <i className="fa fa-caret-down"></i></button>     
    <div className="w3-dropdown-content w3-card-4 w3-bar-block">
      <a href="#dd" className="w3-bar-item w3-button">Link</a>
      <a href="#dd" className="w3-bar-item w3-button">Link</a>
      <a href="#dd" className="w3-bar-item w3-button">Link</a>
    </div>
  </div>
  <a href="#dd" className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-teal" title="Search"><i className="fa fa-search"></i></a>
 </div>


  <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium">
    <a href="#team" className="w3-bar-item w3-button">Team</a>
    <a href="#work" className="w3-bar-item w3-button">Work</a>
    <a href="#pricing" className="w3-bar-item w3-button">Price</a>
    <a href="#contact" className="w3-bar-item w3-button">Contact</a>
    <a href="#Search" className="w3-bar-item w3-button">Search</a>
  </div>
</div>
            </Fragment>
        )
    }
}

export default Header;