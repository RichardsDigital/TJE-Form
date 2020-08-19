import React from 'react';

const SectionSeven = () => {

    const handleChange = (e) => {
        let dummy = Object.assign({}, props.formData.emergencyContact);
        dummy[e.target.name] = e.target.value;
        props.setFormData({emergencyContact: dummy});
    }

    return (
    <div id="sectionSeven">
        <div className="contentContainer">
            <h1>Section Seven - Emergency Contact</h1>
            <div className="employmentDetailsBox">
                <label>Contact Name</label>
                <input type="text" name="contact_name" value={props.formData.emergencyContact.contact_name || ''} onChange={handleChange} />
                <label>Contact Number</label>
                <input type="text" name="contact_number" value={props.formData.emergencyContact.contact_number || ''} onChange={handleChange} />
                <label>Contact Address</label>
                <input type="text" name="contact_address" value={props.formData.emergencyContact.contact_address || ''} onChange={handleChange} />
                <label>Postcode</label>
                <input type="text" name="postcode" value={props.formData.emergencyContact.postcode || ''} className="postcode" onChange={handleChange} />
                <label>Their relationship to you</label>
                <input type="text" name="relationship_to_you" value={props.formData.emergencyContact.relationship_to_you || ''} onChange={handleChange} />
            </div>
        </div>
    </div>
    )
}

export default SectionSeven;