import React from 'react';
import StandardInput from '../inputs/StandardInput';
import Checkbox from '../inputs/Checkbox';

const SectionFour = (props) => {

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
        if (e.target.type === 'checkbox') {
            dummy_5[e.target.name] = e.target.checked;
        }
        else {
            dummy_5[e.target.name] = e.target.value;
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
            <div id="sectionFour">
                <div className="contentContainer">
                    <h1>Section Four - Employment</h1>
                    <div className="checkBoxContainer">
                        <div className="description">
                            <p>Current Employment Status, <br></br> please tick which applies</p>
                        </div>
                        <div className="row">
                            <Checkbox
                                type="checkbox"
                                label="Employed FT"
                                name="employedFT"
                                defaultChecked={props.formData.employment.employedFT}
                                value={props.formData.employment.employedFT || ''}
                                onChange={handleChange} />
                            <Checkbox
                                type="checkbox"
                                label="Self Employed"
                                name="self_employed"
                                defaultChecked={props.formData.employment.self_employed}
                                value={props.formData.employment.self_employed || ''}
                                onChange={handleChange} />
                            <Checkbox
                                type="checkbox"
                                label="Zero Hours"
                                name="zero_hours"
                                defaultChecked={props.formData.employment.zero_hours}
                                value={props.formData.employment.zero_hours || ''}
                                onChange={handleChange} />
                        </div>
                        <div className="row">
                            <Checkbox
                                type="checkbox"
                                label="Employed PT"
                                name="employedPT"
                                defaultChecked={props.formData.employment.employedPT}
                                value={props.formData.employment.employedPT || ''}
                                onChange={handleChange} />
                            <Checkbox
                                type="checkbox"
                                label="Unemployed"
                                name="unemployed"
                                defaultChecked={props.formData.employment.unemployed}
                                value={props.formData.employment.unemployed || ''}
                                onChange={handleChange} />
                            <Checkbox
                                type="checkbox"
                                label="Retired"
                                name="retired"
                                defaultChecked={props.formData.employment.retired}
                                value={props.formData.employment.retired || ''}
                                onChange={handleChange} />
                        </div>
                        <div className="row">
                            <Checkbox
                                type="checkbox"
                                label="Agency Worker"
                                name="agency_worker"
                                defaultChecked={props.formData.employment.agency_worker}
                                value={props.formData.employment.agency_worker || ''}
                                onChange={handleChange} />
                            <Checkbox
                                type="checkbox"
                                label="Temporary Contract"
                                name="temporary_contract"
                                defaultChecked={props.formData.employment.temporary_contract}
                                value={props.formData.employment.temporary_contract || ''}
                                onChange={handleChange} />
                            <Checkbox
                                type="checkbox"
                                label="Prefer not to say"
                                name="prefer_not_to_say"
                                defaultChecked={props.formData.employment.prefer_not_to_say}
                                value={props.formData.employment.prefer_not_to_say || ''}
                                onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <StandardInput
                    className="type"
                    title="Primary source of income if unemployed"
                    name="primary_source_of_income"
                    value={props.formData.employment.primary_source_of_income || ''}
                    onChange={handleChange} />

                <p><i>If unemployed, self-employed or retired please now continue to section 5:</i></p>

                <div className="employmentDetailsBox">
                    <label>Annual Salary</label>
                    <input
                        type="text"
                        name="annual_salary"
                        value={props.formData.employment.annual_salary || ''}
                        onChange={handleChange}
                        required="required" />
                    <label>Company Name</label>
                    <input
                        type="text"
                        name="company_name"
                        value={props.formData.employment.company_name || ''}
                        onChange={handleChange} 
                        required="required" />
                    <label>Company Address</label>
                    <input
                        type="text"
                        name="company_address"
                        value={props.formData.employment.company_address || ''}
                        onChange={handleChange}
                        required="required" />
                    <label>Postcode</label>
                    <input
                        type="text"
                        name="postcode"
                        value={props.formData.employment.postcode || ''}
                        className="postcode"
                        onChange={handleChange}
                        required="required" />
                    <label>Reference Name</label>
                    <input
                        type="text"
                        name="reference_name"
                        value={props.formData.employment.reference_name || ''}
                        onChange={handleChange}
                        required="required" />
                    <label>Reference Contact Number</label>
                    <input
                        type="text"
                        name="reference_contact_number"
                        value={props.formData.employment.reference_contact_number || ''}
                        onChange={handleChange}
                        required="required" />
                    <label>Reference Contact Email</label>
                    <input
                        type="text"
                        name="reference_contact_email"
                        value={props.formData.employment.reference_contact_email || ''}
                        onChange={handleChange}
                        required="required" />
                </div>
            </div>
            <div className="toggleButtonsContainer">
                <button onClick={props.prev} style={{ visibility: props.isHidden.previous }}>Previous</button>
                <button type="submit" style={{ visibility: props.isHidden.next }}>Next</button>
            </div>
        </form>
    )
}

export default SectionFour;