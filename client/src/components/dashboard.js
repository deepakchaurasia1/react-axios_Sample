import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAction, postAction, getAllAction } from '../actions/index.js';

/**
 * export the dashboard page
 */
class Dashboard extends Component {

  /**
   * call the test action that we created
   */
  handleClickHello() {
    this.props.testAction();
  }

  saveData() {
    this.props.saveName('Deepak')
  }

  handleClickALL() {
    this.props.getAll();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h4>This is the Sample Axios Application</h4>
        <a onClick={this.handleClickHello.bind(this)}>Send Request</a>

        <h4> Sending - NAME to server ---- </h4>
        <a onClick={ this.saveData.bind(this)}> Save Name </a>
        <h4> Multiple Request at once </h4>
        <a onClick={ this.handleClickALL.bind(this)}> Send Request(s) </a>

        <h3>{this.props.auth.message}</h3>


      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        testAction : function() {
          dispatch(getAction())
        },
        saveName : function(name) {
          dispatch(postAction(name))
        },
        getAll: function(){
          dispatch(getAllAction())
        }
    }
}
/**
 * exports our component and gives it access to the redux state
 */
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
