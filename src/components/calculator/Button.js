import PropTypes from 'prop-types';
import '../../style/App.css';

const Button = ({ name, onClick, className }) => (
  <button type="button" onClick={() => onClick(name)} className={className}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  name: null,
  onClick: null,
  className: 'button',
};

export default Button;
