import React from 'react';
import inputNames from '../../sharedData/inputNames';
import StandardInput from '../inputs/StandardInput';
import Checkbox from '../inputs/Checkbox';


const SectionThree = (props) => {

  // const address_1_checkbox_names = ['has_been_declared_bankrupt_a', 'has_been_declared_bankrupt_b', 'has_been_declared_bankrupt_c'];
  // const address_2_checkbox_names = ['has_ever_entered_into_an_IVA_a', 'has_ever_entered_into_an_IVA_b', 'has_ever_entered_into_an_IVA_c'];
  // const address_3_checkbox_names = ['has_rented_a_property_in_the_past_a', 'has_rented_a_property_in_the_past_b', 'has_rented_a_property_in_the_past_c'];

  const handleChange = (e) => {

    inputNames.bankAccount_names.forEach(name => {
      let dummy_1 = Object.assign({}, props.formData.personalDetails);
      let dummy_2 = Object.assign({}, props.formData.addressHistory);
      let dummy_3 = Object.assign({}, props.formData.creditCheck);
      let dummy_4 = Object.assign({}, props.formData.bankAccount);
      let dummy_5 = Object.assign({}, props.formData.employment);
      let dummy_6 = Object.assign({}, props.formData.otherOccupants);
      let dummy_7 = Object.assign({}, props.formData.references);
      let dummy_8 = Object.assign({}, props.formData.emergencyContact);
      let dummy_9 = Object.assign({}, props.formData.decleration);

      // address_1_checkbox_names.forEach(name => {
      //   if (e.target.value === name) {
      //     dummy_3.declared_bankrupt[e.target.name] = e.target.value;
      //   }
      // })

      dummy_3[e.target.name] = e.target.value;
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
                defaultChecked={props.formData.creditCheck.has_ever_entered_into_an_IVA_a}
                value="yes" label="Yes"
                onChange={handleChange} />
              <Checkbox
                type="checkbox"
                name="has_ever_entered_into_an_IVA_b"
                defaultChecked={props.formData.creditCheck.has_ever_entered_into_an_IVA_b}
                value="no" label="No"
                onChange={handleChange} />
              <Checkbox
                type="checkbox"
                name="has_ever_entered_into_an_IVA_c"
                defaultChecked={props.formData.creditCheck.has_ever_entered_into_an_IVA_c}
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
                defaultChecked={props.formData.creditCheck.has_rented_a_property_in_the_past_a}
                value="yes"
                label="Yes"
                onChange={handleChange} />
              <Checkbox
                type="checkbox"
                name="has_rented_a_property_in_the_past_b"
                defaultChecked={props.formData.creditCheck.has_rented_a_property_in_the_past_b}
                value="no"
                label="No"
                onChange={handleChange} />
              <Checkbox
                type="checkbox"
                name="has_rented_a_property_in_the_past_c"
                defaultChecked={props.formData.creditCheck.has_rented_a_property_in_the_past_c}
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
    </div>
  )
}

export default SectionThree;