import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../actions';
import TableData from './Table';

class TableContainer extends React.Component {
  render() {
    return (
      <TableData
        data={this.props.data}
        removeItem={index => {
          this.props.removeItem(index);
          this.props.updateFocusedItem(null);
        }}
        showResult={d => this.props.updateFocusedItem(d)}
      />
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  focus: state.focus,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
