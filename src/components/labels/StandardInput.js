import React from 'react';

const StandardInput = (props) => {
    return(
        <div className="labelledInput">
            <label>{props.title}</label>
            <input 
            className={props.className} 
            name={props.name} 
            onChange={props.onChange} 
            value={props.value} 
            type="text"
            required
            />
        </div>
    )
}

export default StandardInput;