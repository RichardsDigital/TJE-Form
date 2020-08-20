import React from 'react';

const SideLabelRight = (props) => {
    return (
        <div className="sideLabelRight">
            <input className={props.className}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                type="text"
                required={props.required} />
            <label>
                {props.titleRight}
            </label>
        </div>
    )
}

export default SideLabelRight;