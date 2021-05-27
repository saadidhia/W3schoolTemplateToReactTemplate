import React,{Fragment, useContext } from "react"
import { offreContext } from "../App";


function Pricing (){


    const offre=React.useContext(offreContext)
   

        return(
            <Fragment>
 <div className="w3-row-padding w3-center w3-padding-64" id="pricing">
    <h2>PRICING</h2>
    <p>Choose a pricing plan that fits your needs.</p> <br/>

    {offre.map((data,id)=>
    <div className="w3-third w3-margin-bottom" key={id}>
    <ul className="w3-ul w3-border w3-hover-shadow">
      <li className="w3-theme">
        <p className="w3-xlarge">{data.offreName}</p>
      </li>
      <li className="w3-padding-16"><b>{data.stockage}</b> Storage</li>
      <li className="w3-padding-16"><b>{data.email}</b> Emails</li>
      <li className="w3-padding-16"><b>{data.supportDomaine}</b> Domains</li>
      <li className="w3-padding-16"><b>{data.typeSupport}</b> Support</li>
      <li className="w3-padding-16">
        <h2 className="w3-wide"><i className="fa fa-usd"></i>{data.price}</h2>
        <span className="w3-opacity">per month</span>
      </li>
      <li className="w3-theme-l5 w3-padding-24">
        <button className="w3-button w3-teal w3-padding-large"><i className="fa fa-check"></i> Sign Up</button>
      </li>
    </ul>
  </div>
    )}
   
</div>
            </Fragment>
        )
    
}

export default Pricing ;