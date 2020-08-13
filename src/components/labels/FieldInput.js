import React from 'react';

const FieldInput = (props) => {
    return(
        <div className="labelledInput" style={{gridRow: props.row, gridColumn: props.column}}>
            <label>{props.title}</label>
            <textarea 
            className={props.className} 
            name={props.name} 
            onChange={props.onChange} 
            value={props.value} 
            type="text"
            required/>
        </div>
    )
}

export default FieldInput;