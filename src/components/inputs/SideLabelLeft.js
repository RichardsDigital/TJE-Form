import React from 'react';

const SideLabelLeft = (props) => {
    return (
        <div className="sideLabelLeft">
            <label className={props.className}>
                {props.titleLeft}
            </label>
            <input
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                type="text"
                required={props.required} />
        </div>
    )
}

export default SideLabelLeft;