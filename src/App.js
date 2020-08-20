import React, { useState, useRef } from 'react';
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
  const node = useRef();
  const [isHidden, setIsHidden] = useState();
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
      setIsHidden('visible');
    } 
  }

  const next = () => {
    if (pageIndex < 8 && pageIndex > 0) {
      setPageIndex(pageIndex + 1);
    } 
    if (pageIndex === 7) {
      setIsHidden('hidden');
    }
  }

  // // Log data once state updates --------------------

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <button onClick={prev}>Previous</button>
        <button onClick={next} ref={node} style={{visibility: isHidden}}>Next</button>
      </div>

    </div>
  );
}

export default App;
