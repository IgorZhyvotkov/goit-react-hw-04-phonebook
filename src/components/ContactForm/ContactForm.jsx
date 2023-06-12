import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Label, Input, Button, FormS } from './ContactForm.styled';

const initialValues = { name: '', number: '' };

function ContactForm({ onAddContact }) {
  const handleSubmit = (velues, { resetForm }) => {
    onAddContact(velues);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormS>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <Label htmlFor="number">Number</Label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <Button type="submit">Add contact</Button>
      </FormS>
    </Formik>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
