import PropTypes from 'prop-types';
import { ContactListStyle, ContactItem } from "./ContactList.styled"; 

const ContactList = ({ list, onDeleteContact }) => (
  <ContactListStyle>
    {list.map(({ id, name, number }) => {
      return (
        <ContactItem key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </ContactItem>
      );
    })}
  </ContactListStyle>
);

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};


export default ContactList;
