import PropTypes from 'prop-types';
import '../../style/App.css';

const Display = ({ data }) => (
  <div className="display">
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
