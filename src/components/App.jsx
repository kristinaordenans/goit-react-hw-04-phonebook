import { useEffect, useState } from 'react';
// import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContacForm/ContactForm';
import { Filter } from './FilterContacts/FilterContacts';
import { nanoid } from 'nanoid';
import { Container, ContainerTitle, ContactsTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? []
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])


  const formSubmitHandler = (data) => {
    const contact = { ...data, id: nanoid()};
    setContacts(prevContacts => [contact, ...prevContacts.contacts])
  }

 const deliteContact = (contactId) => {
    setContacts(contacts => contacts.filter(contacts => contacts.id !== contactId))
  }

const filtreInputChange = (e) => {
    setFilter(e.currentTarget.value)
}

const filtredContacts = () => {
    const normalizeToLowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizeToLowerCase))
  } 
  
const contactsLength = contacts.length;

  
  return (
      <Container>
        <ContainerTitle>Phonebook</ContainerTitle>
        <ContactForm onSubmit={formSubmitHandler} contacts={contacts} />
        <ContactsTitle>Contacts</ContactsTitle>
        {contactsLength !== 0 && <Filter value={filter} filterInputChange={filtreInputChange} />}
        <ContactList
          contacts={filtredContacts}
          onDeliteContact={deliteContact}/> 
    </Container>
    );
}


// export class App extends Component {

//   state = {
//       contacts: [],
//       filter: '',
//   }
  
//   formSubmitHandler = (data) => {
//     const contact = { ...data };
//     contact.id = nanoid();
//     this.setState(prevState => ({
//       contacts:[contact, ...prevState.contacts]
//     }))
//   }

//   deliteContact = (contactId) => {
//     this.setState(prevState => ({
//         contacts: prevState.contacts.filter(contacts => contacts.id !== contactId)
//        }
//     ))
//   }

//   filtreInputChange = (e) => {
//     this.setState({filter: e.currentTarget.value})
//   }

//   filterContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizeToLowerCase = filter.toLowerCase();
//     return contacts.filter(({ name }) => name.toLowerCase().includes(normalizeToLowerCase))
//   } 

//   componentDidMount() {
//     const contactsLocal = localStorage.getItem('contacts');
//     const parselContacts = JSON.parse(contactsLocal);
//     if (parselContacts) {
//       this.setState({ contacts: parselContacts });
//     }
    
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//     }
//   }

//   render() {
//     const { contacts, filter } = this.state;
//     const filtredContacts = this.filterContacts();
//     const contactsLength = contacts.length;

//     return (
//       <Container>
//         <ContainerTitle>Phonebook</ContainerTitle>
//         <ContactForm onSubmit={this.formSubmitHandler} contacts={contacts} />
//         <ContactsTitle>Contacts</ContactsTitle>
//         {contactsLength !== 0 && <Filter value={filter} filterInputChange={this.filtreInputChange} />}
//         <ContactList
//           contacts={filtredContacts}
//           onDeliteContact={this.deliteContact}/> 
//     </Container>
//     );
//   }
// };
