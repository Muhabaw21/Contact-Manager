import React, { Component } from 'react';
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return{
        ...state,
        contacts: state.contacts.filter(contact => contact.id!== action.payload)
      };
      case 'ADD_CONTACT':
        return{
          ...state,
          contacts: [action.payload, ...state.contacts]
        }
      default:
         return state;
  }};
export class Provider extends Component {
  state = {
    contacts:[
      {
        id:1,
        name: 'Alex',
        email: 'alex@gmail.com',
        phone: '+251-973965944'
      },
      {
        id:2,
        name: 'john',
        email: 'John@gmail.com',
        phone: '+251-970011765'
      },
      {
        id:3,
        name: 'get',
        email: 'get@gmail.com',
        phone: '+251-18462248'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action ))  
  };
  render(){
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;