import React from "react";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1000,
  };

  state = {
    valuesIndex: 0,
  };

  componentDidMount() {
    // @ts-ignore
    setInterval(() => {
      this.setState({
        // @ts-ignore
        valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length,
      });
      // @ts-ignore
    }, this.props.interval);
  }

  render() {
    // @ts-ignore
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default ChangingProgressProvider;
