import PropTypes from 'prop-types';

const Button = ({ name, onClick }) => (
  <button type="button" onClick={() => onClick(name)}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  name: null,
  onClick: null,
};

export default Button;
