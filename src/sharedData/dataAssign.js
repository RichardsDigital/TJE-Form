
// Objects for placing specific data --------------------

const dataAssign = (formData) => {
    let dummies = {
        dummy_1: Object.assign({}, formData.personalDetails),
        dummy_2: Object.assign({}, formData.addressHistory),
        dummy_3: Object.assign({}, formData.creditCheck),
        dummy_4: Object.assign({}, formData.bankAccount),
        dummy_5: Object.assign({}, formData.employment),
        dummy_6: Object.assign({}, formData.otherOccupants),
        dummy_7: Object.assign({}, formData.references),
        dummy_8: Object.assign({}, formData.emergencyContact),
        dummy_9: Object.assign({}, formData.decleration)
    }
    return (dummies);
};

export default dataAssign;