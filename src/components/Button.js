import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <button type="button">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: null,
};

export default Button;
