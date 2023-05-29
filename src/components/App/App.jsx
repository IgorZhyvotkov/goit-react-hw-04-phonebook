import { Component } from 'react';
import { Container, Title } from './App.styled';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const INITIAL_STATE_APP = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends Component {
  state = { ...INITIAL_STATE_APP };

  onAddContact = inputVelues => {
    const { contacts } = this.state;
    const id = nanoid();
    const newContact = { id, ...inputVelues };

    for (let contact of contacts) {
      if (inputVelues.name.toLowerCase() === contact.name.toLowerCase()) {
        alert(`${inputVelues.name} is already in contacts`);
        return;
      }
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  visibleContact = () => {
    const { filter, contacts } = this.state;
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />

        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          list={this.visibleContact()}
          onDeleteContact={this.deleteContact}
        />
        
      </Container>
    );
  }
}

export default App;
