import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../style/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      total: '',
      next: '',
      operation: '',
    };
  }

  handleClick(btnName) {
    this.setState(prevState => ({ ...calculate(prevState, btnName) }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-body">
        <Display data={{ total, next, operation }} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
