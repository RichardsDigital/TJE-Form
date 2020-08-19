import React from 'react';

const SectionSix = () => {
    const handleChange = (e) => {
        let dummy = Object.assign({}, props.formData.references);
        dummy[e.target.name] = e.target.value;
        props.setFormData({references: dummy});
    }
    
    return (
        <div id="sectionSix">
            <div className="contentContainer">
                <h1>Section Six - References</h1>
                <p><i>Please list two references of people we can contact regarding you personally
                Ideally this will be a property manager of previous landlord. Try to avoid using family members and really close friends.
                It can include but is not limited to co-workers, past-teachers, previous employers, family friends, mentors or former landlords.
          </i></p>
                <h2>Referee One</h2>
                <div className="employmentDetailsBox">
                    <label>Referee Name</label>
                    <input type="text" name="referee_name_1" value={props.formData.references.referee_name_1 || ''} onChange={handleChange} />
                    <label>Referee Contact Number</label>
                    <input type="text" name="referee_contact_number_1" value={props.formData.references.referee_contact_number_1 || ''} onChange={handleChange} />
                    <label>Referee Address</label>
                    <input type="text" name="referee_address_1" value={props.formData.references.referee_address_1 || ''} onChange={handleChange} />
                    <label>Postcode</label>
                    <input type="text" name="postcode_1" value={props.formData.references.postcode_1 || ''} className="postcode" onChange={handleChange} />
                    <label>Their relationship to you</label>
                    <input type="text" name="relationship_to_you_1" value={props.formData.references.relationship_to_you_1 || ''} onChange={handleChange} />
                </div>
                <h2>Referee Two</h2>
                <div className="employmentDetailsBox">
                    <label>Referee Name</label>
                    <input type="text" name="referee_name_2" value={props.formData.references.referee_name_2 || ''} onChange={handleChange} />
                    <label>Referee Contact Number</label>
                    <input type="text" name="referee_contact_number_2" value={props.formData.references.referee_contact_number_2 || ''} onChange={handleChange} />
                    <label>Referee Address</label>
                    <input type="text" name="referee_address_2" value={props.formData.references.referee_address_2 || ''} onChange={handleChange} />
                    <label>Postcode</label>
                    <input type="text" name="postcode_2" className="postcode" value={props.formData.references.postcode_2 || ''} onChange={handleChange} />
                    <label>Their relationship to you</label>
                    <input type="text" name="relationship_to_you_2" value={props.formData.references.relationship_to_you_2 || ''} onChange={handleChange} />
                </div>
            </div>
        </div>
    )
}

export default SectionSix;