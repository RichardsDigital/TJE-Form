import React from 'react';
import SideLabelLeft from '../labels/SideLabelLeft';
import FieldInput from '../labels/FieldInput';

const SectionEight = () => {
    const handleChange = (e) => {
        let dummy = Object.assign({}, props.formData.decleration);
        dummy[e.target.name] = e.target.value;
        props.setFormData({decleration: dummy});
    }
    return (
        <div id="sectionEight">
            <div className="contentContainer">
                <h1>Section Eight - Declaration</h1>
                <SideLabelLeft titleLeft="Signature" name="signature" value={props.formData.decleration.signature || ''} onChange={handleChange} />
                <div className="flexLabels">
                    <SideLabelLeft titleLeft="Full Name" name="full_name" value={props.formData.decleration.full_name || ''} onChange={handleChange} />
                    <SideLabelLeft titleLeft="Date" name="date" value={props.formData.decleration.date || ''} onChange={handleChange} />
                </div>
                <FieldInput title="Additional Comments" name="additional_comments" value={props.formData.decleration.additional_comments || ''} className="additionalComments" onChange={handleChange} />
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
}

export default SectionEight;