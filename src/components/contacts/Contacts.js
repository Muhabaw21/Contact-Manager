import React,{ Component} from 'react'
import Contact from './Contact';
import {Consumer} from '../../context';
class Contacts extends Component {
  render() {
    return (
      <Consumer>
      {
        value => {
        const {contacts} = value;
        return (
          <React.Fragment>
          { 
            contacts.map(contact => (
              <Contact key={contact.id}
              contact = {contact}
               name={contact.name}
               email={contact.email}
               phone = {contact.phone}
                    />
            ))
          }
          </React.Fragment>
        )
      }}
      </Consumer>
        );
 }}
   export default Contacts;