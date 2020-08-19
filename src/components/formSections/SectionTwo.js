import React from 'react';
import StandardInput from '../labels/StandardInput';
import SideLabelRight from '../labels/SideLabelRight';
import FieldInput from '../labels/FieldInput';

const SectionTwo = (props) => {

    const handleChange = (e) => {
        let dummy = Object.assign({}, props.formData.addressHistory);
        dummy[e.target.name] = e.target.value;
        props.setFormData({addressHistory: dummy});
    }

    return (
        <div id="sectionTwo">
            <div className="contentContainer">
                <h1>Section Two - Address History</h1>
                <p><i>If you have your current address for less than three years please provide details for three years worth of address history.</i></p>

                <div className="addressRow">
                    <FieldInput className="previousAddressA" name="previous_address_1" value={props.formData.addressHistory.previous_address_1} title="Previous Address 1" onChange={handleChange} />
                    <div className="flexLabels">
                        <SideLabelRight titleRight="Years" className="yearsA" name="years_1" value={props.formData.addressHistory.years_1} onChange={handleChange} />
                        <SideLabelRight titleRight="Months" className="monthsA" name="months_1" value={props.formData.addressHistory.months_1} onChange={handleChange} />
                    </div>
                    <StandardInput className="postCodeA" name="postcode_1" value={props.formData.addressHistory.postcode_1} title="Post Code" onChange={handleChange} />
                    <StandardInput className="typeA" name="type_1" value={props.formData.addressHistory.type_1} title="Type" onChange={handleChange} />
                </div>

                <div className="addressRow">
                    <FieldInput className="previousAddressB" name="previous_address_2" value={props.formData.addressHistory.previous_address_2} title="Previous Address 2" onChange={handleChange} />
                    <div className="flexLabels">
                        <SideLabelRight titleRight="Years" className="yearsB" name="years_2" value={props.formData.addressHistory.years_2} onChange={handleChange} />
                        <SideLabelRight titleRight="Months" className="monthsB" name="months_2" value={props.formData.addressHistory.months_2} onChange={handleChange} />
                    </div>
                    <StandardInput className="postCodeB" name="post_code_2" value={props.formData.addressHistory.post_code_2} title="Post Code" onChange={handleChange} />
                    <StandardInput className="typeB" name="type_2" value={props.formData.addressHistory.type_2} title="Type" onChange={handleChange} />
                </div>

                <div className="addressRow">
                    <FieldInput className="previousAddressC" name="previous_address_3" value={props.formData.addressHistory.previous_address_3} title="Previous Address 3" onChange={handleChange} />
                    <div className="flexLabels">
                        <SideLabelRight titleRight="Years" className="yearsC" name="years_3" value={props.formData.addressHistory.years_3} onChange={handleChange} />
                        <SideLabelRight titleRight="Months" className="monthsC" name="months_3" value={props.formData.addressHistory.months_3} onChange={handleChange} />
                    </div>
                    <StandardInput className="postCodeC" name="postcode_3" value={props.formData.addressHistory.postcode_3} title="Post Code" onChange={handleChange} />
                    <StandardInput className="typeC" name="type_3" title="Type" onChange={handleChange} />
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;