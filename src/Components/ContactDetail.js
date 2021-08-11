import React from "react"
import { Link } from "react-router-dom"
import User from "../images/user.png"

const ContactDetail = (props) => {

    console.log(props.location.state.contact)
   const {Name,Email} =  props.location.state.contact
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                   <img src={User} alt="user" />
                </div>
                <div className="content">
                    <div className="header"> {Name} </div>
                    <div className="description"> {Email} </div>

                </div>

            </div>
            <Link to="/">
            <div className="center-div">
            <button  className="ui button blue right"> Go back</button>
            </div>
            </Link>

        </div>
    )

}

export default ContactDetail