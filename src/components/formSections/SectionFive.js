import React from 'react';
import FieldInput from '../labels/FieldInput';

const SectionFive = (props) => {
    const handleChange = (e) => {
        let dummy_1 = Object.assign({}, props.formData.personalDetails);
        let dummy_2 = Object.assign({}, props.formData.addressHistory);
        let dummy_3 = Object.assign({}, props.formData.creditCheck);
        let dummy_4 = Object.assign({}, props.formData.bankAccount);
        let dummy_5 = Object.assign({}, props.formData.employment);
        let dummy_6 = Object.assign({}, props.formData.otherOccupants);
        let dummy_7 = Object.assign({}, props.formData.references);
        let dummy_8 = Object.assign({}, props.formData.emergencyContact);
        let dummy_9 = Object.assign({}, props.formData.decleration);
        dummy_6[e.target.name] = e.target.value;
        props.setFormData({
            personalDetails: dummy_1,
            addressHistory: dummy_2,
            creditCheck: dummy_3,
            bankAccount: dummy_4,
            employment: dummy_5,
            otherOccupants: dummy_6,
            references: dummy_7,
            emergencyContact: dummy_8,
            decleration: dummy_9
        });
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
                <FieldInput name="occupant_5" value={props.formData.otherOccupants.occupant_5 || ''} onChange={handleChange} />
                <FieldInput name="occupant_6" value={props.formData.otherOccupants.occupant_6 || ''} onChange={handleChange} />
            </div>
        </div>
    </div>
    )
}

export default SectionFive;