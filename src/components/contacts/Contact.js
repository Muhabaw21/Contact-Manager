import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../context'
 class Contact extends Component{
  state = {
  showContact:true
  };
clicked = e =>{
this.setState({showContact: !this.state.showContact});
};
onDeleteClick = (id, dispatch) =>{
dispatch({type: 'DELETE_CONTACT', payload:id});
};
render(){
  const{id,name,email, phone} =this.props;
  const{showContact}= this.state;
  
  return (

    <Consumer>
{
   value => {
  const{dispatch} = value;
  return ( <div className='card card-body mb-3'>
  
  <h4>Name:{name}{''} <i onClick = {this.clicked}
  className="fas fa-sort-down"
  style={{cursor: 'pointer',
          }}
  ></i>
  <i className='fas fa-times' style = {{
       cursor:'pointer',
       float:'right',
       color: 'red'

  }}
 onClick = {this.onDeleteClick.bind(this,id, dispatch )}
  ></i></h4>
  {showContact ?(
  <ul className = 'list-group'>
  <li className ='list-group-item'>Email:{email}</li>
  <li className ='list-group-item'>Phone:{phone}</li>
  </ul>
  ) :null}

   </div>
   ) 
}}
</Consumer> 
  )
}
}
export default Contact