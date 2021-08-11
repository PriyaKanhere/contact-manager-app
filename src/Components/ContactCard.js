import React from "react"
import {Link} from "react-router-dom"
import User from "../images/user.png"

function ContactCard(props){   
   
return(
    
   
         <div className="item">
                 <div className="content-block">
                    <Link to = {{pathname: `/contact/${props.contact.id}`, state: {contact:props.contact}}}>
                    <div className="image">
                    <img src={User} alt="user" />
                     </div>
                    <div className="header">{props.contact.Name}</div>
                   
                    <div>{props.contact.Email}</div>
                    </Link>
                </div>
                <i className="trash alternate outline icon" 
                onClick={()=>props.clickHandler(props.contact.id)}
                ></i>
                </div>
  
)
    
}

export default ContactCard