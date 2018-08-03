import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
  componentWillUnmount () {
    this.props.dispatch(actions.getSettings());
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

function select (state) {
  return {
    settings: state
  };
}

export default connect(select)(Home);
