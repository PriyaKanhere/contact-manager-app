import React from "react"
import { Link } from "react-router-dom"
import ContactCard from "./ContactCard"

const ContactList = (props) => {

    const clickHandler = (id) => {
        props.RemoveConatct(id)
    }
    
    const renderContactList = props.Contacts.map((contact) =>{
        return(    
            <div>      
                
                 <ContactCard contact={contact} clickHandler={clickHandler} key={contact.id}/>
                 </div>
          
        )
    })

    return(
        <div className="ui celled list">
                    <h2>
                        <Link to="/add"> 
                             <button  className="ui button blue right"> Add Contact</button>   
                        </Link>    
                     </h2> 
            {renderContactList}
        </div>
    )
}

export default ContactList