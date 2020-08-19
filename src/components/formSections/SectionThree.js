import React from 'react';
import inputNames from '../../sharedData/inputNames';
import StandardInput from '../labels/StandardInput';
import SideLabelLeft from '../labels/SideLabelLeft';
import SideLabelRight from '../labels/SideLabelRight';
import Checkbox from '../labels/Checkbox';


const SectionThree = (props) => {
  const handleChange = (e) => {

    inputNames.bankAccount_names.forEach(name => {
      if (e.target.name === name) {
        let dummy_b = Object.assign({}, props.formData.bankAccount);
        dummy_b[e.target.name] = e.target.value;
        props.setFormData({ bankAccount: dummy_b });
      }
      else {
        let dummy_a = Object.assign({}, props.formData.creditCheck);
        dummy_a[e.target.name] = e.target.value;
        props.setFormData({ creditCheck: dummy_a });
      }
    });
  }

  return (
    <div id="sectionThree">
      <div className="contentContainer">
        <h1>Section Three - Credit Check</h1>
        <p><i>By completing the below and the remainder of this application you agree to a soft credit Check
        being carried out to confirm the validity of your application. Please nore, any instances in
        which you prefer not to answer may affect your application.
                </i></p>

        <div className="row">
          <div className="upper">
            <p>Have you ever been declared bankrupt? If Yes, please provide details below:</p>
            <div className="checkBoxes">
              <Checkbox type="checkbox" name="has_been_declared_bankrupt" value="yes" label="Yes" onChange={handleChange} />
              <Checkbox type="checkbox" name="has_been_declared_bankrupt" value="no" label="No" onChange={handleChange} />
              <Checkbox type="checkbox" name="has_been_declared_bankrupt" value="prefer not to answer" label="Prefer not to answer" onChange={handleChange} />
            </div>
          </div>
          <div className="lower">
            <StandardInput className="description" name="declared_bankrupt_details" onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="upper">
            <p>Have you ever entered into an IVA? If Yes, please provide details below:</p>
            <div className="checkBoxes">
              <Checkbox type="checkbox" name="has_ever_entered_into_an_IVA" value="yes" label="Yes" onChange={handleChange} />
              <Checkbox type="checkbox" name="has_ever_entered_into_an_IVA" value="no" label="No" onChange={handleChange} />
              <Checkbox type="checkbox" name="has_ever_entered_into_an_IVA" value="prefer not to answer" label="Prefer not to answer" onChange={handleChange} />
            </div>
          </div>
          <div className="lower">
            <StandardInput className="description" name="IVA_details" onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="upper">
            <p>Have you ever rented a property in the past? If Yes, please provide details below:</p>
            <div className="checkBoxes">
              <Checkbox type="checkbox" name="has_rented_a_property_in_the_past" value="yes" label="Yes" onChange={handleChange} />
              <Checkbox type="checkbox" name="has_rented_a_property_in_the_past" value="no" label="No" onChange={handleChange} />
              <Checkbox type="checkbox" name="has_rented_a_property_in_the_past" value="prefer not to answer" label="Prefer not to answer" onChange={handleChange} />
            </div>
          </div>
          <div className="lower">
            <StandardInput className="description" name="rented_property_details" onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="upper">
            <p>Have you even been, or are you in arrears with another landlord? If Yes, please provide details below:</p>
            <div className="checkBoxes">
              <Checkbox type="checkbox" name="has_been_in_arrears_with_another_landlord" value="yes" label="Yes" onChange={handleChange} />
              <Checkbox type="checkbox" name="has_been_in_arrears_with_another_landlord" value="no" label="No" onChange={handleChange} />
              <Checkbox type="checkbox" name="has_been_in_arrears_with_another_landlord" value="prefer not to answer" label="Prefer not to answer" onChange={handleChange} />
            </div>
          </div>
          <div className="lower">
            <StandardInput className="description" name="landlord_arrears_details" onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="upper">
            <p>Have you ever been a named person on a mortgage? If Yes, please provide details below:</p>
            <div className="checkBoxes">
              <Checkbox type="checkbox" name="has_been_a_named_person_on_morgage" value="yes" label="Yes" onChange={handleChange} />
              <Checkbox type="checkbox" name="has_been_a_named_person_on_morgage" value="no" label="No" onChange={handleChange} />
              <Checkbox type="checkbox" name="has_been_a_named_person_on_morgage" value="prefer not to answer" label="Prefer not to answer" onChange={handleChange} />
            </div>
          </div>
          <div className="lower">
            <StandardInput className="description" name="named_person_on_morgage_details" onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="upper">
            <p>Have you ever had or have any CJJs? If Yes, please provide details below:</p>
            <div className="checkBoxes">
              <Checkbox type="checkbox" name="has_had_any_CJJs" value="yes" label="Yes" onChange={handleChange} />
              <Checkbox type="checkbox" name="has_had_any_CJJs" value="no" label="No" onChange={handleChange} />
              <Checkbox type="checkbox" name="has_had_any_CJJs" value="prefer not to answer" label="Prefer not to answer" onChange={handleChange} />
            </div>
          </div>
          <div className="lower">
            <StandardInput className="description" name="CJJs_details" onChange={handleChange} />
          </div>
        </div>

        <div id="bankAccount">
          <h1>Bank Account</h1>
          <div className="row">
            <div className="upper">
              <SideLabelLeft titleLeft="Account Name" className="accountName" name="account_name" />
              <SideLabelLeft titleLeft="Bank Name" className="bankName" name="bank_name" />
            </div>
            <div className="middle">
              <SideLabelLeft titleLeft="Account Number" className="accountName" name="account_number" />
              <SideLabelLeft titleLeft="Sort Code" className="bankName" name="sort_code" />
            </div>
            <p>How long have you banked here?</p>
            <div className="lower">
              <SideLabelRight titleRight="Years" className="accountName" name="bank_years" />
              <SideLabelRight titleRight="Months" className="bankName" name="bank_months" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree;