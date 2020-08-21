import React from 'react';
import StandardInput from '../inputs/StandardInput';
import SideLabelRight from '../inputs/SideLabelRight';
import FieldInput from '../inputs/FieldInput';

const SectionTwo = (props) => {

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

        if (e.target.name === 'years_1' || e.target.name === 'months_1') {
            dummy_2.address_1.time_at_address[e.target.name] = e.target.value;
        }
        else if (e.target.name === 'street_1') {
            dummy_2.address_1.street = e.target.value;
        }
        else if (e.target.name === 'postcode_1') {
            dummy_2.address_1.postcode = e.target.value;
        }
        else if (e.target.name === 'type_1') {
            dummy_2.address_1.type = e.target.value;
        }

        else if (e.target.name === 'years_2' || e.target.name === 'months_2') {
            dummy_2.address_2.time_at_address[e.target.name] = e.target.value;
        }
        else if (e.target.name === 'street_2') {
            dummy_2.address_2.street = e.target.value;
        }
        else if (e.target.name === 'postcode_2') {
            dummy_2.address_2.postcode = e.target.value;
        }
        else if (e.target.name === 'type_2') {
            dummy_2.address_2.type = e.target.value;
        }

        else if (e.target.name === 'years_3' || e.target.name === 'months_3') {
            dummy_2.address_3.time_at_address[e.target.name] = e.target.value;
        }
        else if (e.target.name === 'street_3') {
            dummy_2.address_3.street = e.target.value;
        }
        else if (e.target.name === 'postcode_3') {
            dummy_2.address_3.postcode = e.target.value;
        }
        else if (e.target.name === 'type_3') {
            dummy_2.address_3.type = e.target.value;
        }

        else {
            dummy_2[e.target.name] = e.target.value;
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
        <div id="sectionTwo">
            <div className="contentContainer">
                <h1>Section Two - Address History</h1>
                <p><i>If you have your current address for less than three years please provide details for three years worth of address history.</i></p>

                <div className="addressRow">
                    <FieldInput
                        className="previousAddressA"
                        name="street_1"
                        value={props.formData.addressHistory.address_1.street_1}
                        title="Previous Address 1"
                        onChange={handleChange} />
                    <div className="flexLabels">
                        <SideLabelRight
                            titleRight="Years"
                            className="yearsA"
                            name="years_1"
                            value={props.formData.addressHistory.address_1.time_at_address.years_1}
                            onChange={handleChange} />
                        <SideLabelRight
                            titleRight="Months"
                            className="monthsA"
                            name="months_1"
                            value={props.formData.addressHistory.address_1.time_at_address.months_1}
                            onChange={handleChange} />
                    </div>
                    <StandardInput
                        className="postCodeA"
                        name="postcode_1"
                        value={props.formData.addressHistory.postcode_1}
                        title="Post Code"
                        onChange={handleChange} />
                    <StandardInput
                        className="typeA"
                        name="type_1"
                        value={props.formData.addressHistory.address_1.type_1}
                        title="Type" onChange={handleChange} />
                </div>

                <div className="addressRow">
                    <FieldInput
                        className="previousAddressB"
                        name="street_2"
                        value={props.formData.addressHistory.previous_address_2}
                        title="Previous Address 2"
                        onChange={handleChange} />
                    <div className="flexLabels">
                        <SideLabelRight
                            titleRight="Years"
                            className="yearsB"
                            name="years_2"
                            value={props.formData.addressHistory.years_2}
                            onChange={handleChange} />
                        <SideLabelRight
                            titleRight="Months"
                            className="monthsB"
                            name="months_2"
                            value={props.formData.addressHistory.months_2}
                            onChange={handleChange} />
                    </div>
                    <StandardInput
                        className="postCodeB"
                        name="postcode_2"
                        value={props.formData.addressHistory.post_code_2}
                        title="Post Code" onChange={handleChange} />
                    <StandardInput
                        className="typeB"
                        name="type_2"
                        value={props.formData.addressHistory.address_1.type_2}
                        title="Type"
                        onChange={handleChange} />
                </div>

                <div className="addressRow">
                    <FieldInput
                        className="previousAddressC"
                        name="street_3"
                        value={props.formData.addressHistory.previous_address_3}
                        title="Previous Address 3"
                        onChange={handleChange} />
                    <div className="flexLabels">
                        <SideLabelRight
                            titleRight="Years"
                            className="yearsC"
                            name="years_3"
                            value={props.formData.addressHistory.years_3}
                            onChange={handleChange} />
                        <SideLabelRight
                            titleRight="Months"
                            className="monthsC"
                            name="months_3"
                            value={props.formData.addressHistory.months_3}
                            onChange={handleChange} />
                    </div>
                    <StandardInput
                        className="postCodeC"
                        name="postcode_3"
                        value={props.formData.addressHistory.postcode_3}
                        title="Post Code"
                        onChange={handleChange} />
                    <StandardInput
                        className="typeC"
                        name="type_3"
                        value={props.formData.addressHistory.address_1.type_3}
                        title="Type"
                        onChange={handleChange} />
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;