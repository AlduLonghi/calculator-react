import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleEvent = this.handleEvent.bind(this);

    this.state = {
      calculation: {
        total: '',
        next: '',
        operation: '',
      },
    };
  }

  handleEvent(btnName) {
    this.setState(prevState => ({
      calculation: calculate(prevState.calculation, btnName),
    }));
  }

  render() {
    const { calculation } = this.state;
    return (
      <>
        <Display data={calculation} />
        <ButtonPanel onClick={this.handleEvent} />
      </>
    );
  }
}

export default App;
