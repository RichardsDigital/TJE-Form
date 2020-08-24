import React from 'react';
import StandardInput from '../inputs/StandardInput';
import Checkbox from '../inputs/Checkbox';
import SideLabelLeft from '../inputs/SideLabelLeft';
import SideLabelRight from '../inputs/SideLabelRight';
import inputNames from '../../sharedData/inputNames';


const SectionThree = (props) => {

  const bankrupt_checkbox_names = ['has_been_declared_bankrupt_a', 'has_been_declared_bankrupt_b', 'has_been_declared_bankrupt_c'];
  const IVA_checkbox_names = ['has_ever_entered_into_an_IVA_a', 'has_ever_entered_into_an_IVA_b', 'has_ever_entered_into_an_IVA_c'];
  const rented_property_checkbox_names = ['has_rented_a_property_in_the_past_a', 'has_rented_a_property_in_the_past_b', 'has_rented_a_property_in_the_past_c'];
  const landlord_arrears_names = ['has_been_in_arrears_with_another_landlord_a', 'has_been_in_arrears_with_another_landlord_b', 'has_been_in_arrears_with_another_landlord_c'];
  const morgage_names = ['has_been_a_named_person_on_morgage_a', 'has_been_a_named_person_on_morgage_b', 'has_been_a_named_person_on_morgage_c'];
  const CJJs_names = ['has_had_any_CJJs_a', 'has_had_any_CJJs_b', 'has_had_any_CJJs_c'];

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

    bankrupt_checkbox_names.forEach(name => {
      if (e.target.name === name) {
        dummy_3.declared_bankrupt.has_been_declared_bankrupt = e.target.value;
      }
    });
    IVA_checkbox_names.forEach(name => {
      if (e.target.name === name) {
        dummy_3.entered_IVA.has_ever_entered_into_an_IVA = e.target.value;
      }
    });
    rented_property_checkbox_names.forEach(name => {
      if (e.target.name === name) {
        dummy_3.propery_rent.has_rented_a_property_in_the_past = e.target.value;
      }
    });
    landlord_arrears_names.forEach(name => {
      if (e.target.name === name) {
        dummy_3.arrears_landlord.has_been_in_arrears_with_another_landlord = e.target.value;
      }
    });
    morgage_names.forEach(name => {
      if (e.target.name === name) {
        dummy_3.named_on_morgage.has_been_a_named_person_on_morgage = e.target.value;
      }
    });
    CJJs_names.forEach(name => {
      if (e.target.name === name) {
        dummy_3.CJJs.has_had_any_CJJs = e.target.value;
      }
    });

    if (e.target.name === 'declared_bankrupt_details') {
      dummy_3.declared_bankrupt.details = e.target.value
    }
    if (e.target.name === 'IVA_details') {
      dummy_3.entered_IVA.details = e.target.value
    }
    if (e.target.name === 'rented_property_details') {
      dummy_3.propery_rent.details = e.target.value
    }
    if (e.target.name === 'landlord_arrears_details') {
      dummy_3.arrears_landlord.details = e.target.value
    }
    if (e.target.name === 'named_person_on_morgage_details') {
      dummy_3.named_on_morgage.details = e.target.value
    }
    if (e.target.name === 'CJJs_details') {
      dummy_3.CJJs.details = e.target.value
    }

    // Store bank details

    inputNames.bankAccount_names.forEach(name => {
      if (e.target.name === name) {
        dummy_4[e.target.name] = e.target.value;
      }
    })

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
                <Checkbox
                  type="checkbox"
                  name="has_been_declared_bankrupt_a"
                  defaultChecked={props.formData.creditCheck.declared_bankrupt.has_been_declared_bankrupt_a}
                  value="yes"
                  label="Yes"
                  onChange={handleChange} />
                <Checkbox
                  type="checkbox"
                  name="has_been_declared_bankrupt_b"
                  defaultChecked={props.formData.creditCheck.declared_bankrupt.has_been_declared_bankrupt_b}
                  value="no" label="No"
                  onChange={handleChange} />
                <Checkbox
                  type="checkbox"
                  name="has_been_declared_bankrupt_c"
                  defaultChecked={props.formData.creditCheck.declared_bankrupt.has_been_declared_bankrupt_c}
                  value="prefer not to answer"
                  label="Prefer not to answer"
                  onChange={handleChange} />
              </div>
            </div>
            <div className="lower">
              <StandardInput
                className="description"
                name="declared_bankrupt_details"
                onChange={handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="upper">
              <p>Have you ever entered into an IVA? If Yes, please provide details below:</p>
              <div className="checkBoxes">
                <Checkbox
                  type="checkbox"
                  name="has_ever_entered_into_an_IVA_a"
                  defaultChecked={props.formData.creditCheck.entered_IVA.has_ever_entered_into_an_IVA_a}
                  value="yes" label="Yes"
                  onChange={handleChange} />
                <Checkbox
                  type="checkbox"
                  name="has_ever_entered_into_an_IVA_b"
                  defaultChecked={props.formData.creditCheck.entered_IVA.has_ever_entered_into_an_IVA_b}
                  value="no" label="No"
                  onChange={handleChange} />
                <Checkbox
                  type="checkbox"
                  name="has_ever_entered_into_an_IVA_c"
                  defaultChecked={props.formData.creditCheck.entered_IVA.has_ever_entered_into_an_IVA_c}
                  value="prefer not to answer"
                  label="Prefer not to answer"
                  onChange={handleChange} />
              </div>
            </div>
            <div className="lower">
              <StandardInput
                className="description"
                name="IVA_details"
                onChange={handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="upper">
              <p>Have you ever rented a property in the past? If Yes, please provide details below:</p>
              <div className="checkBoxes">
                <Checkbox
                  type="checkbox"
                  name="has_rented_a_property_in_the_past_a"
                  defaultChecked={props.formData.creditCheck.propery_rent.has_rented_a_property_in_the_past_a}
                  value="yes"
                  label="Yes"
                  onChange={handleChange} />
                <Checkbox
                  type="checkbox"
                  name="has_rented_a_property_in_the_past_b"
                  defaultChecked={props.formData.creditCheck.propery_rent.has_rented_a_property_in_the_past_b}
                  value="no"
                  label="No"
                  onChange={handleChange} />
                <Checkbox
                  type="checkbox"
                  name="has_rented_a_property_in_the_past_c"
                  defaultChecked={props.formData.creditCheck.propery_rent.has_rented_a_property_in_the_past_c}
                  value="prefer not to answer"
                  label="Prefer not to answer"
                  onChange={handleChange} />
              </div>
            </div>
            <div className="lower">
              <StandardInput
                className="description"
                name="rented_property_details"
                onChange={handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="upper">
              <p>Have you even been, or are you in arrears with another landlord? If Yes, please provide details below:</p>
              <div className="checkBoxes">
                <Checkbox
                  type="checkbox"
                  name="has_been_in_arrears_with_another_landlord_a"
                  defaultChecked={props.formData.creditCheck.has_been_in_arrears_with_another_landlord_a}
                  value="yes"
                  label="Yes"
                  onChange={handleChange} />
                <Checkbox
                  type="checkbox"
                  name="has_been_in_arrears_with_another_landlord_b"
                  defaultChecked={props.formData.creditCheck.has_been_in_arrears_with_another_landlord_b}
                  value="no"
                  label="No"
                  onChange={handleChange} />
                <Checkbox
                  type="checkbox"
                  name="has_been_in_arrears_with_another_landlord_c"
                  defaultChecked={props.formData.creditCheck.has_been_in_arrears_with_another_landlord_c}
                  value="prefer not to answer"
                  label="Prefer not to answer"
                  onChange={handleChange} />
              </div>
            </div>
            <div className="lower">
              <StandardInput
                className="description"
                name="landlord_arrears_details"
                onChange={handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="upper">
              <p>Have you ever been a named person on a mortgage? If Yes, please provide details below:</p>
              <div className="checkBoxes">
                <Checkbox
                  type="checkbox"
                  name="has_been_a_named_person_on_morgage_a"
                  defaultChecked={props.formData.creditCheck.has_been_a_named_person_on_morgage_a}
                  value="yes"
                  label="Yes"
                  onChange={handleChange} />
                <Checkbox
                  type="checkbox"
                  name="has_been_a_named_person_on_morgage_b"
                  defaultChecked={props.formData.creditCheck.has_been_a_named_person_on_morgage_b}
                  value="no" label="No"
                  onChange={handleChange} />
                <Checkbox
                  type="checkbox"
                  name="has_been_a_named_person_on_morgage_c"
                  defaultChecked={props.formData.creditCheck.has_been_a_named_person_on_morgage_c}
                  value="prefer not to answer"
                  label="Prefer not to answer"
                  onChange={handleChange} />
              </div>
            </div>
            <div className="lower">
              <StandardInput
                className="description"
                name="named_person_on_morgage_details"
                onChange={handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="upper">
              <p>Have you ever had or have any CJJs? If Yes, please provide details below:</p>
              <div className="checkBoxes">
                <Checkbox
                  type="checkbox"
                  name="has_had_any_CJJs_a"
                  defaultChecked={props.formData.creditCheck.has_had_any_CJJs_a}
                  value="yes"
                  label="Yes"
                  onChange={handleChange} />
                <Checkbox
                  type="checkbox"
                  name="has_had_any_CJJs_b"
                  defaultChecked={props.formData.creditCheck.has_had_any_CJJs_b}
                  value="no"
                  label="No"
                  onChange={handleChange} />
                <Checkbox
                  type="checkbox"
                  name="has_had_any_CJJs_c"
                  defaultChecked={props.formData.creditCheck.has_had_any_CJJs_c}
                  value="prefer not to answer"
                  label="Prefer not to answer"
                  onChange={handleChange} />
              </div>
            </div>
            <div className="lower">
              <StandardInput
                className="description"
                name="CJJs_details"
                onChange={handleChange} />
            </div>
          </div>
        </div>

        <div id="bankAccount">
            <div className='bankAccountContainer'>
                <h1>Bank Account</h1>
                <div className="row">
                    <div className="upper">
                        <SideLabelLeft titleLeft="Account Name" className="accountName" name="account_name" value={props.formData.bankAccount.account_name || ''} onChange={handleChange} required="required" />
                        <SideLabelLeft titleLeft="Bank Name" className="bankName" name="bank_name" value={props.formData.bankAccount.bank_name || ''} onChange={handleChange} required="required" />
                    </div>
                    <div className="middle">
                        <SideLabelLeft titleLeft="Account Number" className="accountNumber" name="account_number" value={props.formData.bankAccount.account_number || ''} onChange={handleChange} required="required" />
                        <SideLabelLeft titleLeft="Sort Code" className="sortCode" name="sort_code" value={props.formData.bankAccount.sort_code || ''} onChange={handleChange} required="required"/>
                    </div>
                    <p className="bankTitle">How long have you banked here?</p>
                    <div className="lower">
                        <SideLabelRight titleRight="Years" className="bankYears" name="bank_years" value={props.formData.bankAccount.bank_years || ''} onChange={handleChange} required="required" />
                        <SideLabelRight titleRight="Months" className="bankMonths" name="bank_months" value={props.formData.bankAccount.bank_months || ''} onChange={handleChange} required="required" />
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="toggleButtonsContainer">
        <button onClick={props.prev} style={{ visibility: props.isHidden.previous }}>Previous</button>
        <button type="submit" style={{ visibility: props.isHidden.next }}>Next</button>
      </div>
    </form>
  )
}

export default SectionThree;