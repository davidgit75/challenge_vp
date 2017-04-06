import React from 'react';
import Chip from 'material-ui/Chip';
import './styles.css';

const substractPhone = (phone, row) => {
  const str = phone.toString();

  // Check if first number is negative
  let number;
  if (str[0] === '-') number = parseInt(str[0]+str[1], 10);
  else number = parseInt(str[0], 10);

  str.split("").map((item, index) => {
    let start = 0;
    if (str[0] === '-') start = 1;
    if (index > start ) number -= parseInt(item, 10);
  });
  return {substract: number, row, comparison: (number > row).toString()};
};

const Result = props => {
  const compair = props.focus ? substractPhone(props.focus.data.phone, props.focus.position[0]) : null;
  return (
    <div className="container-result">
      {
        props.focus
        ?
          <Chip style={{ backgroundColor: '#7CB342' }}>
            <string>
              RESULT: {props.focus.data.name} {props.focus.data.lastName} {props.focus.data.phone},
              cell clicked: ({props.focus.position[0]}, {props.focus.position[1]}),
              subtract phone: {compair.comparison} ({compair.substract} > {compair.row})
            </string>
          </Chip>
        :
          <Chip style={{ backgroundColor: '#FF9800' }}>
            <string>RESULT: no ha seleccionado alguna fila</string>
          </Chip>
      }
    </div>
  );
};

export default Result;
