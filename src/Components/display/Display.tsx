import React, { Component } from 'react';
import './Display.scss';

export interface Props {
  value: number
}

export default class Display extends Component<Props> {
  render() {
    return (
      <div className="Display">
        {this.props.value}
      </div>
    );
  }
}
