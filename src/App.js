import React, { useState } from 'react';
import './styles/app.scss';
import logo from './images/TJE.png';
import StandardInput from './components/labels/StandardInput';
import SideLabelInput from './components/labels/SideLabelInput';
import Checkbox from './components/labels/Checkbox';
import FieldInput from './components/labels/FieldInput';


function App() {

  const [dataCollection, setDataCollection] = useState(null)

  const data = [];

  // Questions name array --------------------

  const personalDetails_names = ['title', 'forename', 'middlename', 'surname', 'current_address', 'phone_number',
    'email_address', 'nationality', 'years', 'months', 'ni_number', 'required_tenancy_term', 'required_move_in_date'
  ];
  const addressHistory_names = [
    'previous_address_1', 'years_1', 'months_1', 'postcode_1', 'type_1', 
    'previous_address_2', 'years_2', 'months_2', 'postcode_2', 'type_2',
    'previous_address_3', 'years_3', 'months_3', 'postcode_3', 'type_3'
  ];
  const creditCheck_names = [
    'has_been_declared_bankrupt', 'declared_bankrupt_details', 
    'has_ever_entered_into_an_IVA', 'IVA_details',
    'has_rented_a_property_in_the_past', 'rented_property_details', 
    'has_been_in_arrears_with_another_landlord', 'landlord_arrears_details',
    'has_been_a_named_person_on_morgage', 'named_person_on_morgage_details',
    'has_had_any_CJJs', 'CJJs_details'
  ];
  const bankAccount_names = [
    'account_name', 'bank_name',
    'account_number', 'sort_code',
    'bank_years', 'bank_months'
  ];
  const employment_names = [
    'employedFT', 'self_employed', 'zero_hours',
    'employedPT', 'unemployed', 'retired',
    'agency_worker', 'temporary_contract', 'prefer_not_to_say',

    'annual_salary', 'company_name', 'company_address', 'postcode', 'reference_name', 'reference_contact_number', 'reference_contact_email'
  ];
  const otherOccupants_names = [
    'occupant_1', 'occupant_2', 'occupant_3', 'occupant_4', 'occupant_5','occupant_6',
  ];
  const references_names = [
    'referee_name_1', 'referee_contact_number_1', 'referee_address_1', 'postcode_1', 'relationship_to_you_1',
    'referee_name_2', 'referee_contact_number_2', 'referee_address_2', 'postcode_2', 'relationship_to_you_2'
  ];
  const emergencyContact_names = [
    'contact_name', 'contact_number', 'contact_address', 'postcode', 'relationship_to_you'
  ];
  const decleration_names = [
    'signature', 'full_name', 'date', 'additional_comments'
  ];

  // Objects for placing specific data --------------------

  const personalDetails = {};
  const addressHistory = {};
  const creditCheck = {};
  const bankAccount = {};
  const employment = {};
  const otherOccupants = {};
  const references = {};
  const emergencyContact = {};
  const decleration = {};

  const handleChange = (e) => {

    // Soft inputs to their objects --------------------
    
    personalDetails_names.forEach(name => {
      if (e.target.name === name ) {
        personalDetails[e.target.name] = e.target.value;
      }
    });
    addressHistory_names.forEach(name => {
      if (e.target.name === name ) {
        addressHistory[e.target.name] = e.target.value;
      }
    });
    creditCheck_names.forEach(name => {
      if (e.target.name === name ) {
        creditCheck[e.target.name] = e.target.value;
      }
    });
    bankAccount_names.forEach(name => {
      if (e.target.name === name ) {
        bankAccount[e.target.name] = e.target.value;
      }
    });
    employment_names.forEach(name => {
      if (e.target.name === name ) {
        employment[e.target.name] = e.target.value;
      }
    });
    otherOccupants_names.forEach(name => {
      if (e.target.name === name ) {
        otherOccupants[e.target.name] = e.target.value;
      }
    });
    references_names.forEach(name => {
      if (e.target.name === name ) {
        references[e.target.name] = e.target.value;
      }
    });
    emergencyContact_names.forEach(name => {
      if (e.target.name === name ) {
        emergencyContact[e.target.name] = e.target.value;
      }
    });
    decleration_names.forEach(name => {
      if (e.target.name === name ) {
        decleration[e.target.name] = e.target.value;
      }
    });
  }

  // Sort checkboxes to their objects --------------------

  const handleCheckbox = (e) => {
    creditCheck_names.forEach(name => {
      if (e.target.name === name ) {
        creditCheck[e.target.name] = e.target.checked;
      }
    });
    employment_names.forEach(name => {
      if (e.target.name === name ) {
        bankAccount[e.target.name] = e.target.checked;
        
      }
    });
  }

  // addressHistory, creditCheck, bankAccount, employment, otherOccupants, references, emergencyContact, decleration

  // Push objects into data array --------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    data.push(personalDetails, creditCheck, bankAccount, employment, otherOccupants, references, emergencyContact, decleration);
    // data.push(personalDetails);
    // data.push(addressHistory);
    setDataCollection(data);
    console.log(dataCollection);
  }

  return (
    <div className="App">
      <form>

        <div id="pageHeader">
          <div className="headerContainer">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <h1>Application Form</h1>
          </div>
        </div>
        <div id="sectionOne">
          <div className="contentContainer">
            <h1>Section One - Personal Details</h1>
            <div className="rowOne">
              <StandardInput title="Title" className="title" name="title" onChange={handleChange} required="required"/>
              <StandardInput title="Forename" className="forename" name="forename" onChange={handleChange} required="required"/>
              <StandardInput title="Middle name" className="middlename" name="middlename" onChange={handleChange} />
              <StandardInput title="Surname" className="surname" name="surname" onChange={handleChange} required="required"/>
            </div>
            <div className="rowTwo">
              <FieldInput title="Current Address" className="currentAddress" name="current_address" onChange={handleChange} required="required"/>
              <div>
                <StandardInput title="Phone Number" className="phoneNumber" name="phone_number" onChange={handleChange} required="required"/>
                <StandardInput title="Email Address" className="emailAddress" name="email_address" onChange={handleChange} required="required"/>
              </div>
            </div>
            <div className="rowThree">
              <StandardInput title="Postcode" className="postCode" name="postcode" onChange={handleChange} required="required"/>
              <StandardInput title="Nationality" className="nationality" name="nationality" onChange={handleChange} required="required"/>
            </div>
            <p>Time at above address</p>
            <div className="rowFour">
              <div className="flexLabels">
                <SideLabelInput titleRight="Years" className="years" name="years" onChange={handleChange} required="required"/>
                <SideLabelInput titleRight="Months" className="months" name="months" onChange={handleChange} required="required"/>
              </div>
            </div>
            <div className="rowFive">
              <StandardInput title="National Insurance Number" className="niNumber" name="ni_number" onChange={handleChange} required="required"/>
              <StandardInput title="Required Tenancy Term" className="requiredTenancyTerm" name="required_tenancy_term" onChange={handleChange} required="required"/>
              <StandardInput title="Required move in date" className="requiredMoveInDate" name="required_move_in_date" onChange={handleChange} required="required"/>
            </div>
          </div>
        </div>

        <div id="sectionTwo">
          <div className="contentContainer">
            <h1>Section Two - Address History</h1>
            <p><i>If you have your current address for less than three years please provide details for three years worth of address history.</i></p>

            <div className="addressRow">
              <FieldInput className="previousAddressA" name="previous_address_1" title="Previous Address 1" onChange={handleChange} />
              <div className="flexLabels">
                <SideLabelInput titleRight="Years" className="yearsA" name="years_1" onChange={handleChange} />
                <SideLabelInput titleRight="Months" className="monthsA" name="months_1" onChange={handleChange} />
              </div>
              <StandardInput className="postCodeA" name="postcode_1" title="Post Code" onChange={handleChange} />
              <StandardInput className="typeA" name="type_1" title="Type" onChange={handleChange} />
            </div>

            <div className="addressRow">
              <FieldInput className="previousAddressB" name="previous_address_2" title="Previous Address 2" onChange={handleChange} />
              <div className="flexLabels">
                <SideLabelInput titleRight="Years" className="yearsB" name="years_2" onChange={handleChange} />
                <SideLabelInput titleRight="Months" className="monthsB" name="months_2" onChange={handleChange} />
              </div>
              <StandardInput className="postCodeB" name="post_code_2" title="Post Code" onChange={handleChange} />
              <StandardInput className="typeB" name="type_2" title="Type" onChange={handleChange} />
            </div>

            <div className="addressRow">
              <FieldInput className="previousAddressC" name="previous_address_3" title="Previous Address 3" onChange={handleChange} />
              <div className="flexLabels">
                <SideLabelInput titleRight="Years" className="yearsC" name="years_3" onChange={handleChange} />
                <SideLabelInput titleRight="Months" className="monthsC" name="months_3" onChange={handleChange} />
              </div>
              <StandardInput className="postCodeC" name="postcode_3" title="Post Code" onChange={handleChange} />
              <StandardInput className="typeC" name="type_3" title="Type" onChange={handleChange} />
            </div>
          </div>
        </div>
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
                  <Checkbox type="checkbox" name="has_been_declared_bankrupt" value="yes" label="Yes" onChange={handleCheckbox} />
                  <Checkbox type="checkbox" name="has_been_declared_bankrupt" value="no" label="No" onChange={handleCheckbox} />
                  <Checkbox type="checkbox" name="has_been_declared_bankrupt" value="prefer not to answer" label="Prefer not to answer" onChange={handleCheckbox} />
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
                  <Checkbox type="checkbox" name="has_ever_entered_into_an_IVA" value="yes" label="Yes" onChange={handleCheckbox} />
                  <Checkbox type="checkbox" name="has_ever_entered_into_an_IVA" value="no" label="No" onChange={handleCheckbox} />
                  <Checkbox type="checkbox" name="has_ever_entered_into_an_IVA" value="prefer not to answer" label="Prefer not to answer" onChange={handleCheckbox} />
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
                  <Checkbox type="checkbox" name="has_rented_a_property_in_the_past" value="yes" label="Yes" onChange={handleCheckbox} />
                  <Checkbox type="checkbox" name="has_rented_a_property_in_the_past" value="no" label="No" onChange={handleCheckbox} />
                  <Checkbox type="checkbox" name="has_rented_a_property_in_the_past" value="prefer not to answer" label="Prefer not to answer" onChange={handleCheckbox} />
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
                  <Checkbox type="checkbox" name="has_been_in_arrears_with_another_landlord" value="yes" label="Yes" onChange={handleCheckbox} />
                  <Checkbox type="checkbox" name="has_been_in_arrears_with_another_landlord" value="no" label="No" onChange={handleCheckbox} />
                  <Checkbox type="checkbox" name="has_been_in_arrears_with_another_landlord" value="prefer not to answer" label="Prefer not to answer" onChange={handleCheckbox} />
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
                  <Checkbox type="checkbox" name="has_been_a_named_person_on_morgage" value="yes" label="Yes" onChange={handleCheckbox} />
                  <Checkbox type="checkbox" name="has_been_a_named_person_on_morgage" value="no" label="No" onChange={handleCheckbox} />
                  <Checkbox type="checkbox" name="has_been_a_named_person_on_morgage" value="prefer not to answer" label="Prefer not to answer" onChange={handleCheckbox} />
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
                  <Checkbox type="checkbox" name="has_had_any_CJJs" value="yes" label="Yes" onChange={handleCheckbox} />
                  <Checkbox type="checkbox" name="has_had_any_CJJs" value="no" label="No" onChange={handleCheckbox} />
                  <Checkbox type="checkbox" name="has_had_any_CJJs" value="prefer not to answer" label="Prefer not to answer" onChange={handleCheckbox} />
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
                  <SideLabelInput titleLeft="Account Name" className="accountName" name="account_name" />
                  <SideLabelInput titleLeft="Bank Name" className="bankName" name="bank_name" />
                </div>
                <div className="middle">
                  <SideLabelInput titleLeft="Account Number" className="accountName" name="account_number" />
                  <SideLabelInput titleLeft="Sort Code" className="bankName" name="sort_code" />
                </div>
                <div className="lower">
                  <p>How long have you banked here?</p>
                  <SideLabelInput titleRight="Years" className="accountName" name="bank_years" />
                  <SideLabelInput titleRight="Months" className="bankName" name="bank_months" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="sectionFour">
          <div className="contentContainer">
            <h1>Section Four - Employment</h1>
            <div className="checkBoxContainer">
              <div className="description">
                <p>Current Employment Status, <br></br> please tick which applies</p>
              </div>
              <div className="row">
                <Checkbox type="checkbox" label="Employed FT" name="employedFT" onChange={handleCheckbox} />
                <Checkbox type="checkbox" label="Self Employed" name="self_employed" onChange={handleCheckbox} />
                <Checkbox type="checkbox" label="Zero Hours" name="zero_hours" onChange={handleCheckbox} />
              </div>
              <div className="row">
                <Checkbox type="checkbox" label="Employed PT" name="employedPT" onChange={handleCheckbox} />
                <Checkbox type="checkbox" label="Unemployed" name="unemployed" onChange={handleCheckbox} />
                <Checkbox type="checkbox" label="Retired" name="retired" onChange={handleCheckbox} />
              </div>
              <div className="row">
                <Checkbox type="checkbox" label="Agency Worker" name="agency_worker" onChange={handleCheckbox} />
                <Checkbox type="checkbox" label="Temporary Contract" name="temporary_contract" onChange={handleCheckbox} />
                <Checkbox type="checkbox" label="Prefer not to say" name="prefer_not_to_say" onChange={handleCheckbox} />
              </div>
            </div>
          </div>

          <StandardInput className="type" title="Primary source of income if unemployed" name="primary_source_of_income" onChange={handleChange} />

          <p><i>If unemployed, self-employed or retired please now continue to section 5:</i></p>

          <div className="employmentDetailsBox">
            <label>Annual Salary</label>
            <input type="text" name="annual_salary" onChange={handleChange} style={{ gridColumn: '2/3' }} />
            <label>Company Name</label>
            <input type="text" name="company_name" onChange={handleChange} style={{ gridColumn: '2/3' }} />
            <label>Company Address</label>
            <input type="text" name="company_address" onChange={handleChange} style={{ gridColumn: '2/3' }} />
            <label>Postcode</label>
            <input type="text" name="postcode" className="postcode" onChange={handleChange} style={{ gridColumn: '2/3'}} />
            <label>Reference Name</label>
            <input type="text" name="reference_name" onChange={handleChange} style={{ gridColumn: '2/3' }} />
            <label>Reference Contact Number</label>
            <input type="text" name="reference_contact_number" onChange={handleChange} style={{ gridColumn: '2/3' }} />
            <label>Reference Contact Email</label>
            <input type="text" name="reference_contact_email" onChange={handleChange} style={{ gridColumn: '2/3' }} />
          </div>
        </div>

        <div id="sectionFive">
          <div className="contentContainer">
            <h1>Section Five - Other Occupants</h1>
            <p><i>Please use this space to name all other occupants that will be within the property:</i></p>
            <div className="occupantsContainer">
              <FieldInput name="occupant_1" onChange={handleChange} />
              <FieldInput name="occupant_2" onChange={handleChange} />
              <FieldInput name="occupant_3" onChange={handleChange} />
              <FieldInput name="occupant_4" onChange={handleChange} />
              <FieldInput name="0ccupant_5" onChange={handleChange} />
              <FieldInput name="0ccupant_6" onChange={handleChange} />
            </div>
          </div>
        </div>

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
              <input type="text" name="referee_name_1" style={{ gridColumn: '2/3' }} onChange={handleChange} />
              <label>Referee Contact Number</label>
              <input type="text" name="referee_contact_number_1" style={{ gridColumn: '2/3' }} onChange={handleChange} />
              <label>Referee Address</label>
              <input type="text" name="referee_address_1" style={{ gridColumn: '2/3' }} onChange={handleChange} />
              <label>Postcode</label>
              <input type="text" name="postcode_1" className="postcode" style={{ gridColumn: '2/3' }} onChange={handleChange} />
              <label>Their relationship to you</label>
              <input type="text" name="relationship_to_you_1" style={{ gridColumn: '2/3' }} onChange={handleChange} />
            </div>
            <h2>Referee Two</h2>
            <div className="employmentDetailsBox">
              <label>Referee Name</label>
              <input type="text" name="referee_name_2" style={{ gridColumn: '2/3' }} onChange={handleChange} />
              <label>Referee Contact Number</label>
              <input type="text" name="referee_contact_number_2" style={{ gridColumn: '2/3' }} onChange={handleChange} />
              <label>Referee Address</label>
              <input type="text" name="referee_address_2" style={{ gridColumn: '2/3' }} onChange={handleChange} />
              <label>Postcode</label>
              <input type="text" name="postcode_2" className="postcode" style={{ gridColumn: '2/3' }} onChange={handleChange} />
              <label>Their relationship to you</label>
              <input type="text" name="relationship_to_you_2" style={{ gridColumn: '2/3' }} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div id="sectionSeven">
          <div className="contentContainer">
            <h1>Section Seven - Emergency Contact</h1>
            <div className="employmentDetailsBox">
              <label>Contact Name</label>
              <input type="text" name="contact_name" style={{ gridColumn: '2/3' }} onChange={handleChange} />
              <label>Contact Number</label>
              <input type="text" name="contact_number" style={{ gridColumn: '2/3' }} onChange={handleChange} />
              <label>Contact Address</label>
              <input type="text" name="contact_address" style={{ gridColumn: '2/3' }} onChange={handleChange} />
              <label>Postcode</label>
              <input type="text" name="postcode" className="postcode" style={{ gridColumn: '2/3' }} onChange={handleChange} />
              <label>Their relationship to you</label>
              <input type="text" name="relationship_to_you" style={{ gridColumn: '2/3' }} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div id="sectionEight">
          <div className="contentContainer">
            <h1>Section Eight - Declaration</h1>
            <SideLabelInput titleLeft="Signature" name="signature" onChange={handleChange} />
            <div className="flexLabels">
              <SideLabelInput titleLeft="Full Name" name="full_name" onChange={handleChange} />
              <SideLabelInput titleLeft="Date" name="date" onChange={handleChange} />
            </div>
            <FieldInput title="Additional Comments" name="additional_comments" className="additionalComments" onChange={handleChange} />
          </div>
        </div>

        <div id="notice">
          <div className="noticeParagraph">
            <p>
              <i>
                Please note the application fee of £180.00 is none refundable, is it therefore imperative
                the information entered is correct.
                The application fee is a one off fee to allow Thomas James Estates to conduct the administration
                on behalf of the Landlord.
                It is seperate from the Holding Deposit which should have been specified for you.
                Please note, any holding deposit is also none refundable due to any non-disclosure of relevant
                information supporting this application.
              </i>
            </p>
          </div>
          <div className="buttonContainer">
            <input type="submit" placeholder="Submit Form" className="submitFormButton" onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
