import React from 'react';

const SideLabelLeft = (props) => {
    return(
        <div className="sideLabelLeft">
            <label>
            {props.titleLeft}
            </label>
            <input className={props.className} 
            name={props.name} 
            onChange={props.onChange} 
            value={props.value} 
            type="text" 
            required={props.required}
            />
        </div>
    )
}

export default SideLabelLeft;