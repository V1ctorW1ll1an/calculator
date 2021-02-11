import React, { Component } from 'react';
import './Button.scss';

export interface Props {
  label: string
  operation: boolean
  double: boolean
  triple: boolean
  click: (value: string) => void
}

export default class Button extends Component<Props> {
  private classes: string

  constructor(props: Props) {
    super(props);
    this.classes = 'Button ';
    this.classes += this.props.operation ? 'operation ' : '';
    this.classes += this.props.double ? 'double ' : '';
    this.classes += this.props.triple ? 'triple ' : '';
  }

  render() {
    return (
      <button onClick={
        (event: React.MouseEvent<HTMLButtonElement>) => {
          return this.props.click(
            (event.target as HTMLButtonElement).innerHTML,
          );
        }
      } className={this.classes}>{this.props.label}</button>
    );
  }
}
