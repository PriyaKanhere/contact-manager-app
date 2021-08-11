import './App.css';
import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'
import {uuid} from 'uuidv4'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ContactDetail from './Components/ContactDetail'
import DeleteContact from './Components/DeleteContact'

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts,setContact]=useState([])

  const AddHandler = (contact) => {
    console.log(contact)
    setContact([...contacts,{id:uuid(),...contact}])
  }

   useEffect(()=>{
    const retriveContacts =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContacts) 
    setContact(retriveContacts)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])

 const RemoveConatct =(id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id
    })

    setContact(newContactList)

 }
  
  return (
    <div className="ui container">
    
      
      <Router>     
      <Header /><br></br><hr></hr>   
     <Switch>
       <Route exact path="/" 
       render={(props) => (<ContactList {...props} Contacts={contacts} RemoveConatct={RemoveConatct}/>)} />
      
       
       <Route path="/add" 
       render = { (props) => (<AddContact {...props} AddHandler={AddHandler}/>)} />

       <Route path="/contact/:id"
       component = {ContactDetail}
       />
            
      <Route path="/delete" 
      component = {DeleteContact}
      />

            
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
