import React from 'react';

const SideLabelInput = (props) => {
    return (
        <div className="sideLabelledInput">
            <label>
                {props.titleLeft}
                <input className={props.className}
                    name={props.name}
                    onChange={props.onChange}
                    value={props.value}
                    type="text"
                    required={props.required} />
                {props.titleRight}</label>
        </div>
    )
}

export default SideLabelInput;