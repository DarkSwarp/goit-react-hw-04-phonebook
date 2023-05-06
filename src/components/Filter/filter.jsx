import PropTypes from 'prop-types';
import css from './filter.module.css';

export function Filter({ value, onChange }) {
  return (
    <label className={css.label}>
      Find contact by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
