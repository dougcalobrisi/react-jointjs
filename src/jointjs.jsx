import jointjs from 'jointjs';
import React, { Component } from 'react';

export default class ReactJointJS extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    const oldProps = this.props;
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        JointJS
      </div>
    );
  }
}
