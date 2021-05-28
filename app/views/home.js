import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
  componentDidMount () {
    this.props.dispatch(actions.getSettings());
    this.props.dispatch(actions.searchUsers());
  }
  render() {
    let renderSet = null;
    let searchUsers = this.props.searchUsers;
    console.log(searchUsers.success)
    if(this.props && this.props.settings) {
      renderSet = this.props.settings;
      console.log(renderSet.settings)
    }
    
    return (
      <div>
        <h2>Home</h2>
        {renderSet ? <p>{renderSet.settings}</p>: null}
        {searchUsers ? <p>{searchUsers.success}</p>: null}
      </div>
    );
  }
}

function select (state) {
  return {
    settings: state.settings,
    searchUsers: state.searchUsers
  };
}

export default connect(select)(Home);
