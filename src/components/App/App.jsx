import { useEffect, useState } from 'react';
import { Container, Title } from './App.styled';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const INITUAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? INITUAL_STATE
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const onAddContact = inputVelues => {
    const id = nanoid();
    const newContact = { id, ...inputVelues };

    if(contacts.find(contact => contact.name === inputVelues)) {      
        alert(`${inputVelues.name} is already in contacts`);
        return;      
    }

    setContacts(prevState => [newContact, ...prevState]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const visibleContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList list={visibleContact} onDeleteContact={deleteContact} />
    </Container>
  );
}

export default App;
