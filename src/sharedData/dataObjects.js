
// Objects for placing specific data --------------------

const dataAssign = (e, props, index) => {

    let dummies = {
        dummy_1 : Object.assign({}, props.formData.personalDetails),
        dummy_2 : Object.assign({}, props.formData.addressHistory),
        dummy_3 : Object.assign({}, props.formData.creditCheck),
        dummy_4 : Object.assign({}, props.formData.bankAccount),
        dummy_5 : Object.assign({}, props.formData.employment),
        dummy_6 : Object.assign({}, props.formData.otherOccupants),
        dummy_7 : Object.assign({}, props.formData.references),
        dummy_8 : Object.assign({}, props.formData.emergencyContact),
        dummy_9 : Object.assign({}, props.formData.decleration)
    }

    [dummies[index]][e.target.name] = e.target.value;
    
    props.setFormData({
        personalDetails: dummies.dummy_1,
        addressHistory: dummies.dummy_2,
        creditCheck: dummies.dummy_3,
        bankAccount: dummies.dummy_4,
        employment: dummies.dummy_5,
        otherOccupants: dummies.dummy_6,
        references: dummies.dummy_7,
        emergencyContact: dummies.dummy_8,
        decleration: dummies.dummy_9
    });
}

const dataObjects = {
    personalDetails: {},
    addressHistory: {},
    creditCheck: {},
    bankAccount: {},
    employment: {},
    otherOccupants: {},
    references: {},
    emergencyContact: {},
    decleration: {}
};

export default dataAssign;