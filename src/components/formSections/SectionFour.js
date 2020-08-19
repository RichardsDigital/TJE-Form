import React from 'react';
import StandardInput from '../labels/StandardInput';
import Checkbox from '../labels/Checkbox';

const SectionFour = (props) => {

    const handleChange = (e) => {
        let dummy = Object.assign({}, props.formData.employment);
        dummy[e.target.name] = e.target.value;
        props.setFormData({ employment: dummy });
    }

    return (
        <div id="sectionFour">
            <div className="contentContainer">
                <h1>Section Four - Employment</h1>
                <div className="checkBoxContainer">
                    <div className="description">
                        <p>Current Employment Status, <br></br> please tick which applies</p>
                    </div>
                    <div className="row">
                        <Checkbox type="checkbox" label="Employed FT" name="employedFT" value={props.formData.employment.employedFT || ''} onChange={handleChange} />
                        <Checkbox type="checkbox" label="Self Employed" name="self_employed" value={props.formData.employment.self_employed|| ''} onChange={handleChange} />
                        <Checkbox type="checkbox" label="Zero Hours" name="zero_hours" value={props.formData.employment.zero_hours || ''} onChange={handleChange} />
                    </div>
                    <div className="row">
                        <Checkbox type="checkbox" label="Employed PT" name="employedPT" value={props.formData.employment.employedPT || ''} onChange={handleChange} />
                        <Checkbox type="checkbox" label="Unemployed" name="unemployed" value={props.formData.employment.unemployed|| ''} onChange={handleChange} />
                        <Checkbox type="checkbox" label="Retired" name="retired" value={props.formData.employment.retired || ''} onChange={handleChange} />
                    </div>
                    <div className="row">
                        <Checkbox type="checkbox" label="Agency Worker" name="agency_worker" value={props.formData.employment.agency_worker || ''} onChange={handleChange} />
                        <Checkbox type="checkbox" label="Temporary Contract" name="temporary_contract" value={props.formData.employment.temporary_contract || ''} onChange={handleChange} />
                        <Checkbox type="checkbox" label="Prefer not to say" name="prefer_not_to_say" value={props.formData.employment.prefer_not_to_say || ''} onChange={handleChange} />
                    </div>
                </div>
            </div>

            <StandardInput className="type" title="Primary source of income if unemployed" name="primary_source_of_income" value={props.formData.employment.primary_source_of_income || ''} onChange={handleChange} />

            <p><i>If unemployed, self-employed or retired please now continue to section 5:</i></p>

            <div className="employmentDetailsBox">
                <label>Annual Salary</label>
                <input type="text" name="annual_salary" value={props.formData.employment.annual_salary|| ''} onChange={handleChange} />
                <label>Company Name</label>
                <input type="text" name="company_name" value={props.formData.employment.company_name|| ''} onChange={handleChange} />
                <label>Company Address</label>
                <input type="text" name="company_address" value={props.formData.employment.company_address|| ''} onChange={handleChange} />
                <label>Postcode</label>
                <input type="text" name="postcode" value={props.formData.employment.postcode || ''} className="postcode" onChange={handleChange} />
                <label>Reference Name</label>
                <input type="text" name="reference_name" value={props.formData.employment.reference_name || ''} onChange={handleChange} />
                <label>Reference Contact Number</label>
                <input type="text" name="reference_contact_number" value={props.formData.employment.reference_contact_number || ''} onChange={handleChange} />
                <label>Reference Contact Email</label>
                <input type="text" name="reference_contact_email" value={props.formData.employment.reference_contact_email || ''} onChange={handleChange} />
            </div>
        </div>
    )
}

export default SectionFour;