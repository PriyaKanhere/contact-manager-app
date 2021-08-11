import React from 'react'

class AddContact extends React.Component{

    state = {
        Name:"",
        Email:""
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.Name ==='' || this.state.Email === '')
        {
            alert('all the fields are mandetory!!')
            return
        }
        this.props.AddHandler(this.state)
        this.setState({
            Name:"",
            Email:""
        })
        this.props.history.push("/")

    }

    render(){
        return(
            <div className="ui main">
                <h2>Add Contact Manager</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field-dark">
                        <label>Name</label>
                        <input type="text" name="name" placeholder = "Name" 
                        onChange={(e)=> this.setState({Name: e.target.value})}
                        value = {this.state.Name}
                        />
                    </div>
                    <div className="field-dark">
                        <label>Email</label>
                        <input type="text" name="email" placeholder = "Email" 
                         onChange={(e)=> this.setState({Email: e.target.value})}
                         value = {this.state.Email}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                   
                </form>
               
            </div>
        )
    }

}

export default AddContact;