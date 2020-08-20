import React from 'react';

const SectionSeven = (props) => {

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
        dummy_8[e.target.name] = e.target.value;
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
        <div id="sectionSeven">
            <div className="contentContainer">
                <h1>Section Seven - Emergency Contact</h1>
                <div className="employmentDetailsBox">
                    <label>Contact Name</label>
                    <input
                        type="text"
                        name="contact_name"
                        value={props.formData.emergencyContact.contact_name || ''}
                        onChange={handleChange} />
                    <label>Contact Number</label>
                    <input
                        type="text"
                        name="contact_number"
                        value={props.formData.emergencyContact.contact_number || ''}
                        onChange={handleChange} />
                    <label>Contact Address</label>
                    <input
                        type="text"
                        name="contact_address"
                        value={props.formData.emergencyContact.contact_address || ''}
                        onChange={handleChange} />
                    <label>Postcode</label>
                    <input
                        type="text"
                        name="postcode"
                        value={props.formData.emergencyContact.postcode || ''}
                        className="postcode"
                        onChange={handleChange} />
                    <label>Their relationship to you</label>
                    <input
                        type="text"
                        name="relationship_to_you"
                        value={props.formData.emergencyContact.relationship_to_you || ''}
                        onChange={handleChange} />
                </div>
            </div>
        </div>
    )
}

export default SectionSeven;