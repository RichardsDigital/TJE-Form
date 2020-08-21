import React from 'react';

const SectionSix = (props) => {

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
        dummy_7[e.target.name] = e.target.value;

        if (e.target.name === 'referee_name_1') {
            dummy_7.referee_1.name = e.target.value;
        }
        else if (e.target.name === 'referee_contact_number_1') {
            dummy_7.referee_1.contact_number = e.target.value;
        }
        else if (e.target.name === 'referee_address_1') {
            dummy_7.referee_1.address = e.target.value;
        }
        else if (e.target.name === 'postcode_1') {
            dummy_7.referee_1.postcode = e.target.value;
        }
        else if (e.target.name === 'relationship_to_you_1') {
            dummy_7.referee_1.relation = e.target.value;
        }

        if (e.target.name === 'referee_name_2') {
            dummy_7.referee_2.name = e.target.value;
        }
        else if (e.target.name === 'referee_contact_number_2') {
            dummy_7.referee_2.contact_number = e.target.value;
        }
        else if (e.target.name === 'referee_address_2') {
            dummy_7.referee_2.address = e.target.value;
        }
        else if (e.target.name === 'postcode_2') {
            dummy_7.referee_2.postcode = e.target.value;
        }
        else if (e.target.name === 'relationship_to_you_2') {
            dummy_7.referee_2.relation = e.target.value;
        }

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
        <form onSubmit={props.validate}>
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
                        <input
                            type="text"
                            name="referee_name_1"
                            value={props.formData.references.referee_1.name || ''}
                            onChange={handleChange} />
                        <label>Referee Contact Number</label>
                        <input
                            type="text"
                            name="referee_contact_number_1"
                            value={props.formData.references.referee_1.contact_number || ''}
                            onChange={handleChange} />
                        <label>Referee Address</label>
                        <input
                            type="text"
                            name="referee_address_1"
                            value={props.formData.references.referee_1.address || ''}
                            onChange={handleChange} />
                        <label>Postcode</label>
                        <input
                            type="text"
                            name="postcode_1"
                            value={props.formData.references.referee_1.postcode || ''}
                            className="postcode"
                            onChange={handleChange} />
                        <label>Their relationship to you</label>
                        <input
                            type="text"
                            name="relationship_to_you_1"
                            value={props.formData.references.referee_1.relation || ''}
                            onChange={handleChange} />
                    </div>

                    <h2>Referee Two</h2>
                    <div className="employmentDetailsBox">
                        <label>Referee Name</label>
                        <input
                            type="text"
                            name="referee_name_2"
                            value={props.formData.references.referee_2.name || ''}
                            onChange={handleChange} />
                        <label>Referee Contact Number</label>
                        <input
                            type="text"
                            name="referee_contact_number_2"
                            value={props.formData.references.referee_2.contact_number || ''}
                            onChange={handleChange} />
                        <label>Referee Address</label>
                        <input
                            type="text"
                            name="referee_address_2"
                            value={props.formData.references.referee_2.address || ''}
                            onChange={handleChange} />
                        <label>Postcode</label>
                        <input
                            type="text"
                            name="postcode_2"
                            className="postcode"
                            value={props.formData.references.referee_2.postcode || ''}
                            onChange={handleChange} />
                        <label>Their relationship to you</label>
                        <input
                            type="text"
                            name="relationship_to_you_2"
                            value={props.formData.references.referee_2.relation || ''}
                            onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="toggleButtonsContainer">
                <button onClick={props.prev} style={{ visibility: props.isHidden.previous }}>Previous</button>
                <button type="submit" style={{ visibility: props.isHidden.next }}>Next</button>
            </div>
        </form>
    )
};

export default SectionSix;