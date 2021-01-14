import PropTypes from 'prop-types';
import '../style/App.css';

const Button = ({ name, onClick }) => (
  <button type="button" onClick={() => onClick(name)} className="button">
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
