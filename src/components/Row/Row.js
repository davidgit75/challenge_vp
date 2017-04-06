import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import './styles.css';

const Row = props => {
  return (
    <TableRow className="table-row">
      <TableRowColumn 
        onTouchTap={() => props.showResult({position: [props.index, 0], data: props.data})}
      >
        {props.index}
      </TableRowColumn>
      {
        Object.keys(props.data).map((key, subIndex) => (
          <TableRowColumn
            key={subIndex}
            onTouchTap={() => props.showResult({position: [props.index, subIndex + 1], data: props.data})}
          >
            {props.data[key]}
          </TableRowColumn>
        ))
      }
      <TableRowColumn>
        <IconButton
          iconStyle={{ color: '#757575' }}
          onTouchTap={() => props.removeItem()}
        >
          <ActionDelete />
        </IconButton>
      </TableRowColumn>
    </TableRow>
  );
};

export default Row;
