import React from 'react'

class Navbar extends React.Component{
    constructor(props){

        super(props)
    }

     w3_close() {
        document.getElementById("mySidebar").style.display = "none";
      }

    



    render(){
        return (
            <React.Fragment>
<nav className="w3-sidebar w3-bar-block w3-white w3-card w3-animate-left w3-xxlarge" style={{display:"none",zIndex:2}} id="mySidebar">
 
  <a href="javascript:void(0)" onClick={this.w3_close} className="w3-bar-item w3-button w3-display-topright w3-text-teal"  >Close
  <i className="fa fa-remove"></i>
  </a>
  <a  className="w3-bar-item w3-button">Link 1</a>
  <a  className="w3-bar-item w3-button">Link 2</a>
  <a  className="w3-bar-item w3-button">Link 3</a>
  <a  className="w3-bar-item w3-button">Link 4</a>
  <a href="#dd" className="w3-bar-item w3-button">Link 5</a>
  
</nav>
            </React.Fragment>
        )
    }
}


export default Navbar;