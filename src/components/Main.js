import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRedo from 'material-ui/svg-icons/content/redo';

import * as Actions from '../actions';
import '../styles/style.css';
import styles from '../styles/style';
import TableContainer from '../components/Table';
import ResultContainer from '../components/Result';
import data from '../data/data';

injectTapEventPlugin();

const fakeFetchListData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000);
  });
}

class Main extends Component {
  componentWillMount() {
    this.getData();
  }

  getData() {
    this.props.setLoading(true);
    fakeFetchListData()
    .then(data => {
      console.log('data', data);
      this.props.setLoading(false);
      this.props.setData(data);
    })
    .catch(error => console.log('error getting data', error));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          {
            this.props.loading
            ?
              <div className="container-loading">
                <CircularProgress />
              </div>
            :
              this.props.data.length > 0
              ?
                <div className="main-container">
                  <TableContainer data={this.props.data}/>
                  <ResultContainer focus={this.props.focus}/>
                </div>
              :
                <div>
                  <Card style={styles.card}>
                    <CardHeader
                      title="Sin datos"
                      subtitle="Puede recargarlos con el botón ubicado en la parte inferior derecha"
                    />
                  </Card>

                  <FloatingActionButton
                    style={{ position: 'absolute', right: 24, bottom: 45 }}
                    onTouchTap={() => {
                      location.reload();
                    }}
                  >
                    <ContentRedo />
                  </FloatingActionButton>
                </div>
          }
        </div>
      </MuiThemeProvider>
    )
  }
}


// Just in case you want to use redux for your project
const mapStateToProps = state => ({
  data: state.data,
  focus: state.focus,
  loading: state.loading
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
