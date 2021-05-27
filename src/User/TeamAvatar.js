import React,{Fragment } from "react"

class TeamAvatar extends React.Component{
  arrayAvatar=[
     {
         "src":"/w3images/avatar.jpg",
         "name":"Johnny Walker",
         "Profession":"Web Designer"
     }, {
        "src":"/w3images/avatar.jpg",
        "name":"Rebecca Flex",
        "Profession":"Support"
    }, {
        "src":"/w3images/avatar.jpg",
        "name":"Jan Ringo",
        "Profession":"Boss man"
    },{
        "src":"/w3images/avatar.jpg",
        "name":"Kai Ringo",
        "Profession":"Fixer"
    }
 ]
    render(){
        return (
            <Fragment>

<div className="w3-container w3-padding-64 w3-center" id="team">
<h2>OUR TEAM</h2>
<p>Meet the team - our office rats:</p>

<div className="w3-row"><br />
{this.arrayAvatar.map((d, idx)=>
    <div className="w3-quarter" key={idx}>
  <img src={d.src} alt="Boss" style={{width:"45%"}} className="w3-circle w3-hover-opacity" />
  <h3>{d.name}</h3>
  <p>{d.Profession}</p>
</div>
)}



</div>
</div>


            </Fragment>
        )
    }
}

export default TeamAvatar