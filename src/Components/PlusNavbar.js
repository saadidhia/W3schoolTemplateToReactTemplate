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
                <div className="w3-container" style={{ position: "relative" }}>
        <a onClick={this.w3_open} className="w3-button w3-xlarge w3-circle w3-teal"
          style={{ position: "absolute", top: "-28px", right: "24px" }} href="#lien">+</a>
      </div>

            </React.Fragment>
        )
    }
}

export default PlusNavbar;