import React from 'react';
import SideLabelLeft from '../inputs/SideLabelLeft';
import FieldInput from '../inputs/FieldInput';

const SectionEight = (props) => {
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
        dummy_9[e.target.name] = e.target.value;
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
        <div id="sectionEight">
            <div className="contentContainer">
                <h1>Section Eight - Declaration</h1>
                <SideLabelLeft
                    titleLeft="Signature"
                    name="signature"
                    className="signature"
                    value={props.formData.decleration.signature || ''}
                    onChange={handleChange} />
                <div className="flexLabels">
                    <SideLabelLeft
                        titleLeft="Full Name"
                        name="full_name"
                        className="fullName"
                        value={props.formData.decleration.full_name || ''}
                        onChange={handleChange} />
                    <SideLabelLeft
                        titleLeft="Date"
                        name="date"
                        className="date"
                        date="date"
                        value={props.formData.decleration.date || ''}
                        onChange={handleChange} />
                </div>
                <FieldInput
                    title="Additional Comments"
                    name="additional_comments"
                    value={props.formData.decleration.additional_comments || ''}
                    className="additionalComments"
                    onChange={handleChange} />
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
            </div>
        </div>
    )
};

export default SectionEight;