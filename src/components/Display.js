import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div>
    <p>{result}</p>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
