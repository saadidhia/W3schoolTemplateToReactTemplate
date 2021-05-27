import { Fragment } from "react";

import React from "react";

class PlusNavbar extends React.Component{


      // Script for side navigation
  w3_open() {
    var x = document.getElementById("mySidebar");
    

    x.style.width = "300px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
  
  }



    render(){
        return(
            <React.Fragment>
                <div style={{position:"relative" }}>
        <a onClick={this.w3_open} className="w3-button w3-large w3-circle w3-teal"
          style={{ position:"absolute",top: "0px", right: "100px" }} href="javascript:void(0)">+</a>
      </div>

            </React.Fragment>
        )
    }
}

export default PlusNavbar;