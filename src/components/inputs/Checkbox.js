import React from 'react';

const Checkbox = (props) => {

    return (
        <label>
            <input type={props.type} name={props.name} onChange={props.onChange} defaultChecked={props.defaultChecked} value={props.value} />
            {props.label}
        </label>
    )
}

export default Checkbox;