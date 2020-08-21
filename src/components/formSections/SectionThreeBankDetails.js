import React from 'react';
import SideLabelLeft from '../inputs/SideLabelLeft';
import SideLabelRight from '../inputs/SideLabelRight';

const SectionThreeBankDetails = (props) => {

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
        dummy_4[e.target.name] = e.target.value;
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
        <div id="bankAccount">
            <div className='bankAccountContainer'>
                <h1>Bank Account</h1>
                <div className="row">
                    <div className="upper">
                        <SideLabelLeft titleLeft="Account Name" className="accountName" name="account_name" value={props.formData.bankAccount.account_name || ''} onChange={handleChange} />
                        <SideLabelLeft titleLeft="Bank Name" className="bankName" name="bank_name" value={props.formData.bankAccount.bank_name || ''} onChange={handleChange} />
                    </div>
                    <div className="middle">
                        <SideLabelLeft titleLeft="Account Number" className="accountNumber" name="account_number" value={props.formData.bankAccount.account_number || ''} onChange={handleChange} />
                        <SideLabelLeft titleLeft="Sort Code" className="sortCode" name="sort_code" value={props.formData.bankAccount.sort_code || ''} onChange={handleChange} />
                    </div>
                    <p className="bankTitle">How long have you banked here?</p>
                    <div className="lower">
                        <SideLabelRight titleRight="Years" className="bankYears" name="bank_years" value={props.formData.bankAccount.bank_years || ''} onChange={handleChange} />
                        <SideLabelRight titleRight="Months" className="bankMonths" name="bank_months" value={props.formData.bankAccount.bank_months || ''} onChange={handleChange} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SectionThreeBankDetails;