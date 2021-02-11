import React, { Component } from 'react';
import Button from '../button/Button';
import Display from '../display/Display';
import './Calculator.scss';

export default class Calculator extends Component {
  click(value: string) {
    console.log(value);
  }

  clearMemory() {
    console.log('Clear');
  }

  setOperation(operation: string) {
    console.log('Operation: ' + operation);
  }

  addDigit(value: string) {
    console.log('Add digit: ' + value);
  }

  render() {
    return (
      <div className="Calculator">
        <Display value={1000000} />
        <Button label="AC"
          operation={false}
          double={false}
          triple={true}
          click={this.clearMemory} />
        <Button label="/" operation={true}
          double={false}
          triple={false}
          click={this.setOperation} />
        <Button label="7" operation={false}
          double={false}
          triple={false}
          click={this.addDigit} />
        <Button label="8" operation={false}
          double={false}
          triple={false}
          click={this.addDigit} />
        <Button label="9" operation={false}
          double={false}
          triple={false}
          click={this.addDigit} />
        <Button label="*" operation={true}
          double={false}
          triple={false}
          click={this.setOperation} />
        <Button label="4" operation={false}
          double={false}
          triple={false}
          click={this.addDigit} />
        <Button label="5" operation={false}
          double={false}
          triple={false}
          click={this.addDigit} />
        <Button label="6" operation={false}
          double={false}
          triple={false}
          click={this.addDigit} />
        <Button label="-" operation={true}
          double={false}
          triple={false}
          click={this.setOperation} />
        <Button label="1" operation={false}
          double={false}
          triple={false}
          click={this.addDigit} />
        <Button label="2" operation={false}
          double={false}
          triple={false}
          click={this.addDigit} />
        <Button label="3" operation={false}
          double={false}
          triple={false}
          click={this.addDigit} />
        <Button label="+" operation={true}
          double={false}
          triple={false}
          click={this.setOperation} />
        <Button label="0" operation={false}
          double={true}
          triple={false}
          click={this.addDigit} />
        <Button label="." operation={false}
          double={false}
          triple={false}
          click={this.setOperation} />
        <Button label="=" operation={true}
          double={false}
          triple={false}
          click={this.setOperation} />
      </div>
    );
  }
}
