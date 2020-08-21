import React, { useState } from 'react';
import SectionThreeBankDetails from './components/formSections/SectionThreeBankDetails';
import './styles/global.scss';

import Header from './components/partials/Header';
import SectionOne from './components/formSections/SectionOne';
import SectionTwo from './components/formSections/SectionTwo';
import SectionThree from './components/formSections/SectionThree';
import SectionFour from './components/formSections/SectionFour';
import SectionFive from './components/formSections/SectionFive';
import SectionSix from './components/formSections/SectionSix';
import SectionSeven from './components/formSections/SectionSeven';
import SectionEight from './components/formSections/SectionEight';

function App() {
  const [isHidden, setIsHidden] = useState({
    previous: 'hidden',
    next: null
  });
  const [pageIndex, setPageIndex] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: {
      address: {
        street: null,
        postcode: null,
        time_at_address: {}
      }
    },
    addressHistory: {
      address_1: {
        street: null,
        postcode: null,
        type: null,
        time_at_address: {}
      },
      address_2: {
        street: null,
        postcode: null,
        type: null,
        time_at_address: {}
      },
      address_3: {
        street: null,
        postcode: null,
        type: null,
        time_at_address: {}
      }
    },
    creditCheck: {
      declared_bankrupt: {
        has_been_declared_bankrupt: null,
        details: null
      },
      entered_IVA: {
        has_ever_entered_into_an_IVA: null,
        details: null
      },
      propery_rent: {
        has_rented_a_property_in_the_past: null,
        details: null
      },
      arrears_landlord: {
        has_been_in_arrears_with_another_landlord: null,
        details: null
      },
      named_on_morgage: {
        has_been_a_named_person_on_morgage: null,
        details: null
      },
      CJJs: {
        has_had_any_CJJs: null,
        details: null
      }
    },
    bankAccount: {},
    employment: {},
    otherOccupants: {},
    references: {
      referee_1: {
        name: null,
        contact_number: null,
        address: null,
        postcode: null,
        relation: null,
      },
      referee_2: {
        name: null,
        contact_number: null,
        address: null,
        postcode: null,
        relation: null,
      }
    },
    emergencyContact: {},
    decleration: {}
  });

  // Hide/Show elements --------------------

  const prev = () => {
    if (pageIndex <= 8 && pageIndex > 1) {
      setPageIndex(pageIndex - 1);
      setIsHidden({ next: 'visible' });
    }
    if (pageIndex === 2) {
      setIsHidden({ previous: 'hidden' });
    }
    scrollToTop();
  }

  const next = () => {
    if (pageIndex < 8 && pageIndex >= 1) {
      setPageIndex(pageIndex + 1);
      setIsHidden({ previous: 'visible' });
    }
    if (pageIndex === 7) {
      setIsHidden({ next: 'hidden' });
    }
    scrollToTop();
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  // // Log data once state updates --------------------

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <form>
        <Header />

        {pageIndex === 1 ?
          <SectionOne formData={formData} setFormData={setFormData} />
          : null}

        {pageIndex === 2 ?
          <SectionTwo formData={formData} setFormData={setFormData} />
          : null}

        {pageIndex === 3 ?
          <div>
            <SectionThree formData={formData} setFormData={setFormData} />
            <SectionThreeBankDetails formData={formData} setFormData={setFormData} />
          </div>
          : null}

        {pageIndex === 4 ?
          <SectionFour formData={formData} setFormData={setFormData} />
          : null}

        {pageIndex === 5 ?
          <SectionFive formData={formData} setFormData={setFormData} />
          : null}

        {pageIndex === 6 ?
          <SectionSix formData={formData} setFormData={setFormData} />
          : null}

        {pageIndex === 7 ?
          <SectionSeven formData={formData} setFormData={setFormData} />
          : null}

        {pageIndex === 8 ?
          <div>
            <SectionEight formData={formData} setFormData={setFormData} />
            <div className="buttonContainer">
              <input type="submit" placeholder="Submit Form" className="submitFormButton" onClick={handleSubmit} />
            </div>
          </div>
          : null}

      </form>

      <div className="toggleButtonsContainer">
        <button onClick={prev} style={{ visibility: isHidden.previous }}>Previous</button>
        <button onClick={next} style={{ visibility: isHidden.next }}>Next</button>
      </div>

    </div>
  );
}

export default App;
