import * as React from 'react';

export default class Hello extends React.Component<{ name: string }> {
  public render() {
    return (
      <h1 className="hello">
      Hello, {this.props.name}!
      </h1>
    );
  }
}
