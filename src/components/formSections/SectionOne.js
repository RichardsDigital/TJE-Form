import React from 'react';
import StandardInput from '../inputs/StandardInput';
import SideLabelRight from '../inputs/SideLabelRight';
import FieldInput from '../inputs/FieldInput';

const SectionOne = (props) => {

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

        if (e.target.name === 'years' || e.target.name === 'months') {
            dummy_1.address.time_at_address[e.target.name] = e.target.value;
        }
        else if (e.target.name === 'street') {
            dummy_1.address.street = e.target.value;
        }
        else if (e.target.name === 'postcode') {
            dummy_1.address.postcode = e.target.value;
        }
        else {
            dummy_1[e.target.name] = e.target.value;
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
        <div id="sectionOne">
            <div className="contentContainer">

                <h1>Section One - Personal Details</h1>

                <div className="rowOne">
                    <StandardInput
                        title="Title"
                        className="title"
                        name="title"
                        value={props.formData.personalDetails.title || ''}
                        onChange={handleChange}
                        required="required" />
                    <StandardInput
                        title="Forename"
                        className="forename"
                        name="forename"
                        value={props.formData.personalDetails.forename || ''}
                        onChange={handleChange}
                        required="required" />
                    <StandardInput
                        title="Middle name"
                        className="middlename"
                        name="middlename"
                        value={props.formData.personalDetails.middlename || ''}
                        onChange={handleChange} />
                    <StandardInput
                        title="Surname"
                        className="surname"
                        name="surname"
                        value={props.formData.personalDetails.surname || ''}
                        onChange={handleChange}
                        required="required" />
                </div>

                <div className="contentColumn">
                    <div className="col-1">
                        <div className="rowTwo">
                            <FieldInput title="Current Address"
                                className="currentAddress"
                                name="street"
                                value={props.formData.personalDetails.address.street || ''}
                                onChange={handleChange}
                                required="required" />
                        </div>
                        <div className="rowThree">
                            <StandardInput
                                title="Postcode"
                                className="postCode"
                                name="postcode"
                                value={props.formData.personalDetails.address.postcode || ''}
                                onChange={handleChange}
                                required="required" />
                            <p>Time at above address</p>
                            <div className="flexLabels">
                                <SideLabelRight
                                    titleRight="Years"
                                    className="years"
                                    name="years"
                                    value={props.formData.personalDetails.address.time_at_address.years || ''}
                                    onChange={handleChange}
                                    required="required" />
                                <SideLabelRight
                                    titleRight="Months"
                                    className="months"
                                    name="months"
                                    value={props.formData.personalDetails.address.time_at_address.months || ''}
                                    onChange={handleChange}
                                    required="required" />
                            </div>
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="rowTwo">
                            <div>
                                <StandardInput
                                    title="Phone Number"
                                    className="phoneNumber"
                                    name="phone_number"
                                    value={props.formData.personalDetails.phone_number || ''}
                                    onChange={handleChange}
                                    required="required" />
                                <StandardInput
                                    title="Email Address"
                                    className="emailAddress"
                                    name="email_address"
                                    value={props.formData.personalDetails.email_address || ''}
                                    onChange={handleChange}
                                    required="required" />
                            </div>
                        </div>
                        <div className="rowThree">
                            <StandardInput
                                title="Nationality"
                                className="nationality"
                                name="nationality"
                                value={props.formData.personalDetails.nationality || ''}
                                onChange={handleChange}
                                required="required" />
                        </div>
                    </div>
                </div>

                <div className="rowFive">
                    <StandardInput
                        title="National Insurance Number"
                        className="niNumber"
                        name="ni_number"
                        value={props.formData.personalDetails.ni_number || ''}
                        onChange={handleChange}
                        required="required" />
                    <StandardInput
                        title="Required Tenancy Term"
                        className="requiredTenancyTerm"
                        name="required_tenancy_term"
                        value={props.formData.personalDetails.required_tenancy_term || ''}
                        onChange={handleChange}
                        required="required" />
                    <StandardInput
                        title="Required move in date"
                        className="requiredMoveInDate"
                        name="required_move_in_date"
                        value={props.formData.personalDetails.required_move_in_date || ''}
                        onChange={handleChange}
                        required="required" />
                </div>
            </div>
        </div>
    )
};

export default SectionOne;