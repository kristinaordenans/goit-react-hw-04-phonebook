import { Component, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContacForm/ContactForm';
import { Filter } from './FilterContacts/FilterContacts';
import { nanoid } from 'nanoid';
import { Container, ContainerTitle, ContactsTitle } from './App.styled';
// import { useEffect, useState } from 'react';


// const useLocalStorage = (defaultValue) => {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(window.localStorage.getItem('contacts')) ?? defaultValue
//   });

//   useEffect(() => {
//         window.localStorage.setItem('contacys', JSON.stringify(contacts))
//   },[contacts])
//  return [contacts, setContacts]
// }

// const [contacts, setContacts] = useLocalStorage('');
// const [filter, setFilter] = useState('');

export class App extends Component {

  state = {
      contacts: [],
      filter: '',
  }
  
  formSubmitHandler = (data) => {
    const contact = { ...data };
    contact.id = nanoid();
    this.setState(prevState => ({
      contacts:[contact, ...prevState.contacts]
    }))
  }

  deliteContact = (contactId) => {
    this.setState(prevState => ({
        contacts: prevState.contacts.filter(contacts => contacts.id !== contactId)
       }
    ))
  }

  filtreInputChange = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeToLowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizeToLowerCase))
  } 

  componentDidMount() {
    const contactsLocal = localStorage.getItem('contacts');
    const parselContacts = JSON.parse(contactsLocal);
    if (parselContacts) {
      this.setState({ contacts: parselContacts });
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filtredContacts = this.filterContacts();
    const contactsLength = contacts.length;

    return (
      <Container>
        <ContainerTitle>Phonebook</ContainerTitle>
        <ContactForm onSubmit={this.formSubmitHandler} contacts={contacts} />
        <ContactsTitle>Contacts</ContactsTitle>
        {contactsLength !== 0 && <Filter value={filter} filterInputChange={this.filtreInputChange} />}
        <ContactList
          contacts={filtredContacts}
          onDeliteContact={this.deliteContact}/> 
    </Container>
    );
  }
};
