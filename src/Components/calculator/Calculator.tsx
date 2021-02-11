import React, { Component } from 'react';
import Button from '../button/Button';
import Display from '../display/Display';
import './Calculator.scss';

export interface Props {

}
export interface State {
  displayValue?: string,
  clearDisplay?: boolean,
  operation?: string,
  values?: Array<number> | undefined,
  current?: number,
}

export default class Calculator extends Component<Props, State> {
  state: State = {
    displayValue: '',
    clearDisplay: false,
    operation: '',
    values: [0, 0],
    current: 0,
  }

  clearMemory() {
    this.setState({
      displayValue: '',
      clearDisplay: false,
      operation: '',
      values: [0, 0],
      current: 0,
    });
  }

  setOperation(operation: string) {
    if (this.state.current === 0) {
      this.setState({
        operation,
        current: 1,
        clearDisplay: true,

      });
    } else {
      const isCalculate = operation === '=';
      const currentOperation = this.state.operation;

      const values = this.state.values?.map((value) => value);

      if (values !== undefined) {
        try {
          values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
        } catch (error) {
          if (this.state.values !== undefined) {
            values[0] = this.state.values[0];
          }
        }

        values[1] = 0;

        this.setState({
          displayValue: `${values[0]}`,
          operation: isCalculate ? '' : operation,
          current: isCalculate ? 0 : 1,
          clearDisplay: !isCalculate,
          values,
        });
      }
    }
  }

  addDigit(value: string) {
    if (value === '.' && this.state.displayValue?.includes('.')) return;

    const clearDisplay =
      this.state.displayValue === '0' ||
      this.state.clearDisplay;

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + value;

    this.setState({ displayValue, clearDisplay: false });

    if (value !== '.') {
      const index = this.state.current;
      const newValue = parseFloat(displayValue);
      // [...this.state.values]
      const values = this.state.values?.map((value) => value);
      if (values !== undefined && index !== undefined) values[index] = newValue;
      this.setState({ values });
    }
  }

  render() {
    return (
      <div className="Calculator">
        <Display value={this.state.displayValue || '0'} />
        <Button label="AC"
          operation={false}
          double={false}
          triple={true}
          click={() => this.clearMemory()} />
        <Button label="/" operation={true}
          double={false}
          triple={false}
          click={() => this.setOperation('/')} />
        <Button label="7" operation={false}
          double={false}
          triple={false}
          click={() => this.addDigit('7')} />
        <Button label="8" operation={false}
          double={false}
          triple={false}
          click={() => this.addDigit('8')} />
        <Button label="9" operation={false}
          double={false}
          triple={false}
          click={() => this.addDigit('9')} />
        <Button label="*" operation={true}
          double={false}
          triple={false}
          click={() => this.setOperation('*')} />
        <Button label="4" operation={false}
          double={false}
          triple={false}
          click={() => this.addDigit('4')} />
        <Button label="5" operation={false}
          double={false}
          triple={false}
          click={() => this.addDigit('5')} />
        <Button label="6" operation={false}
          double={false}
          triple={false}
          click={() => this.addDigit('6')} />
        <Button label="-" operation={true}
          double={false}
          triple={false}
          click={() => this.setOperation('-')} />
        <Button label="1" operation={false}
          double={false}
          triple={false}
          click={() => this.addDigit('1')} />
        <Button label="2" operation={false}
          double={false}
          triple={false}
          click={() => this.addDigit('2')} />
        <Button label="3" operation={false}
          double={false}
          triple={false}
          click={() => this.addDigit('3')} />
        <Button label="+" operation={true}
          double={false}
          triple={false}
          click={() => this.setOperation('+')} />
        <Button label="0" operation={false}
          double={true}
          triple={false}
          click={() => this.addDigit('0')} />
        <Button label="." operation={false}
          double={false}
          triple={false}
          click={() => this.addDigit('.')} />
        <Button label="=" operation={true}
          double={false}
          triple={false}
          click={() => this.setOperation('=')} />
      </div>
    );
  }
}
