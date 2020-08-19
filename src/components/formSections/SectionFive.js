import React from 'react';
import FieldInput from '../labels/FieldInput';

const SectionFive = (props) => {
    const handleChange = (e) => {
        let dummy = Object.assign({}, props.formData.otherOccupants);
        dummy[e.target.name] = e.target.value;
        props.setFormData({otherOccupants: dummy});
    }

    return (
    <div id="sectionFive">
        <div className="contentContainer">
            <h1>Section Five - Other Occupants</h1>
            <p><i>Please use this space to name all other occupants that will be within the property:</i></p>
            <div className="occupantsContainer">
                <FieldInput name="occupant_1" value={props.formData.otherOccupants.occupant_1 || ''} onChange={handleChange} />
                <FieldInput name="occupant_2" value={props.formData.otherOccupants.occupant_2 || ''} onChange={handleChange} />
                <FieldInput name="occupant_3" value={props.formData.otherOccupants.occupant_3 || ''} onChange={handleChange} />
                <FieldInput name="occupant_4" value={props.formData.otherOccupants.occupant_4 || ''} onChange={handleChange} />
                <FieldInput name="0ccupant_5" value={props.formData.otherOccupants.occupant_5 || ''} onChange={handleChange} />
                <FieldInput name="0ccupant_6" value={props.formData.otherOccupants.occupant_6 || ''} onChange={handleChange} />
            </div>
        </div>
    </div>
    )
}

export default SectionFive;