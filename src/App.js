import React, { useState, useEffect } from 'react';
import './styles/global.scss';

import Header from './components/partials/Header';
import SectionOne from './components/formSections/SectionOne';
import SectionTwo from './components/formSections/SectionTwo';
import SectionThree from './components/formSections/SectionThree';
import SectionFour from './components/formSections/SectionFour';
import SectionFive from './components/formSections/SectionFive';
import SectionSix from './components/formSections/SectionFive';
import SectionSeven from './components/formSections/SectionFive';
import SectionEight from './components/formSections/SectionFive';

function App() {

  const [pageIndex, setPageIndex] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: {},
    addressHistory: {},
    creditCheck: {},
    bankAccount: {},
    employment: {},
    otherOccupants: {},
    references: {},
    emergencyContact: {},
    decleration: {}
  });

  // Hide/Show elements --------------------

  const prev = () => {
    if (pageIndex <= 8 && pageIndex > 1) {
      setPageIndex(pageIndex - 1);
    }
  }

  const next = () => {
    if (pageIndex < 8 && pageIndex > 0) {
      setPageIndex(pageIndex + 1);
    }
  }

  // // Log data once state updates --------------------

  const handleSubmit = () => {
    console.log(formData);
  }

  // useEffect(() => {
  //   console.log(dataCollection);
  // });

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
          <SectionThree formData={formData} setFormData={setFormData} />
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
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>

    </div>
  );
}

export default App;
