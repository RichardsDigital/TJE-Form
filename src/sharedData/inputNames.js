const inputNames = {

    // Questions name array --------------------

    personalDetails_names : ['title', 'forename', 'middlename', 'surname', 'current_address', 'phone_number',
        'email_address', 'nationality', 'years', 'months', 'ni_number', 'required_tenancy_term', 'required_move_in_date'
    ],
    addressHistory_names : [
        'previous_address_1', 'years_1', 'months_1', 'postcode_1', 'type_1',
        'previous_address_2', 'years_2', 'months_2', 'postcode_2', 'type_2',
        'previous_address_3', 'years_3', 'months_3', 'postcode_3', 'type_3'
    ],
    creditCheck_names : [
        'has_been_declared_bankrupt', 'declared_bankrupt_details',
        'has_ever_entered_into_an_IVA', 'IVA_details',
        'has_rented_a_property_in_the_past', 'rented_property_details',
        'has_been_in_arrears_with_another_landlord', 'landlord_arrears_details',
        'has_been_a_named_person_on_morgage', 'named_person_on_morgage_details',
        'has_had_any_CJJs', 'CJJs_details'
    ],
    bankAccount_names : [
        'account_name', 'bank_name',
        'account_number', 'sort_code',
        'bank_years', 'bank_months'
    ],
    employment_names : [
        'employedFT', 'self_employed', 'zero_hours',
        'employedPT', 'unemployed', 'retired',
        'agency_worker', 'temporary_contract', 'prefer_not_to_say',

        'annual_salary', 'company_name', 'company_address', 'postcode', 'reference_name', 'reference_contact_number', 'reference_contact_email'
    ],
    otherOccupants_names : [
        'occupant_1', 'occupant_2', 'occupant_3', 'occupant_4', 'occupant_5', 'occupant_6',
    ],
    references_names : [
        'referee_name_1', 'referee_contact_number_1', 'referee_address_1', 'postcode_1', 'relationship_to_you_1',
        'referee_name_2', 'referee_contact_number_2', 'referee_address_2', 'postcode_2', 'relationship_to_you_2'
    ],
    emergencyContact_names : [
        'contact_name', 'contact_number', 'contact_address', 'postcode', 'relationship_to_you'
    ],
    decleration_names : [
        'signature', 'full_name', 'date', 'additional_comments'
    ]
}

export default inputNames;
