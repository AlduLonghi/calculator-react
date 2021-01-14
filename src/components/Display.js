import PropTypes from 'prop-types';

const Display = ({ data }) => (
  <div>
    <p>{`${data.total} ${data.operation} ${data.next}`}</p>
  </div>
);

Display.propTypes = {
  data: {
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  },
};

Display.defaultProps = {
  data: {
    total: '',
    next: '',
    operation: '',
  },
};

export default Display;
