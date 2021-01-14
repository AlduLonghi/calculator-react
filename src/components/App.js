import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '',
      next: '',
      operation: 'null',
    };
  }

  render() {
    return (
      <>
        <Display />
        <ButtonPanel onClick={calculate} />
      </>
    );
  }
}

export default App;
