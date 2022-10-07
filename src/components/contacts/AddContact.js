import React, { Component} from 'react';
import {Consumer} from '../../context'
import uuid  from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
class AddContact extends Component {
state = {
  name:'',
  email:'',
  phone:'',
  address,
  errors:{}
}
onSubmit = (dispatch, e) => {
  e.preventDefault();
  const {name, email, phone, address,errors} = this.state;
  if(name === ''){
  this.setState({errors:{name:" Name not provided"}})
  return;
}
  if(email === ''){
  this.setState({errors:{email:" email not provided"}})
  return;
  }
  if(phone === ''){
  this.setState({errors:{phone:" phone not provided"}})
  return;
  }
  if(address === ''){
    this.setState({errors:{address:" address not provided"}})
    return;
    }
  const newContact = {
    id:uuid(),
    name,
    email,
    phone,
    address
  };
  dispatch({type: 'ADD_CONTACT', payload:newContact})
  this.setState({
    name:'', 
    email:'' ,
    phone:'',
    address:'',
    errors:{}
  });
}
onChange = e =>
this.setState({[e.target.name]:e.target.value});

  render() {
    const{name, email, phone,address, errors} = this.state
return (
  <Consumer>
  {value =>{
    const{dispatch} = value;
    return (
      <div className = 'card mb-3'>
      <div className="card-header">Add Contact</div>
       <div className="card-body">

       <form onSubmit={this.onSubmit.bind(this, dispatch)}>
   <TextInputGroup 
       name = 'name' 
       label = 'Name'
      placeholder = 'Enter Name'
      value = {name}
      onChange={this.onChange}
      error = {errors.name}
                />
   <TextInputGroup
   name = 'email' 
   label = 'Email'
   types = 'email'
   placeholder = 'Enter Email'
   value = {email}
   onChange={this.onChange}
   error = {errors.email}
          />
   <TextInputGroup
   name ='phone' 
   label = 'Phone'
   placeholder = 'Enter Phone'
   value = {phone}
   onChange={this.onChange}
   error = {errors.phone}
   />
   <TextInputGroup
   name ='address' 
   label = 'address'
   placeholder = 'Enter address'
   value = {address}
   onChange={this.onChange}
   error = {errors.address}
   />
   <TextInputGroup/>
    
       
       <input 
       type="submit" 
       value = "Add Contact "  className='btn btn-light btn-block '/>
       </form>
       </div>
    </div>


    )
  }}
  </Consumer>
)
  }
}


export default AddContact;