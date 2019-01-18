import React, { Component } from 'react';
import Credits from '../../components/Credits/Credits';
import Drawer from '../../components/Drawer/Drawer';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Drawer />
          <h1>This will be an awsome app!</h1>
          <button onClick={this.props.openDrawer}>ToggleDrawer</button>
        <Credits />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    openDrawer: () => dispatch(actions.openDrawer())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
