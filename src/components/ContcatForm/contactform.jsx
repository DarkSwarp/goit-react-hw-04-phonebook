import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './contactform.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  reset() {
    this.setState({ name: '', number: '' });
  }
  handlChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handlSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  render() {
    return (
      <form onSubmit={this.handlSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handlChange}
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Ivan Ivanov"
            required
          />
        </label>
        <label className={css.label}>
          Telephone
          <input
            className={css.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handlChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="555-55-55"
            required
          />
        </label>
        <button className={css.btn} type="submite">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
