import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

import styles from './styles.css';
import Row from '../Row';

const TableData = props => {
  return (
    <div className="table-container">
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>#</TableHeaderColumn>
            <TableHeaderColumn>First Name</TableHeaderColumn>
            <TableHeaderColumn>Last Name</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody stripedRows>
          {
            props.data.map((item, index) => (
              <Row
                key={index}
                index={index}
                data={item}
                removeItem={() => props.removeItem(index)}
                showResult={d => props.showResult(d)}
              />
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default TableData;
