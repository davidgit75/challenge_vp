import React from 'react';
import { connect } from 'react-redux';
import Result from './Result';
import * as Actions from '../../actions';

class ResultContainer extends React.Component {
  render() {
    return (
      <Result focus={this.props.focus} />
    );
  }
}

const mapStateToProps = state => ({
  focus: state.focus,
});

export default connect(mapStateToProps)(ResultContainer);
