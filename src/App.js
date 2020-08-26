import React, { useState } from 'react';
import axios from 'axios';
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
import SuccessPage from './components/formSections/SuccessPage';

function App() {
  const [isHidden, setIsHidden] = useState({
    previous: 'hidden',
    next: null
  });
  const[loader, setLoader] = useState(false);
  const[Success, setSuccess] = useState(false);
  //Ensure when in production pageIndex State starts at 1, not 8
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

  const validate = (e) => {
    setLoader(true);
    setPageIndex(9);
    if (pageIndex === 8) {
      e.preventDefault();
      console.log(formData);
      axios.post('https://tje-be.herokuapp.com/post', (formData))
      .then((res) => {

        console.log(res);
        // console.log(res.status);

        if(res.status == 200){
          setTimeout(() => {
            setLoader(false);
            setSuccess(true);
          }, 500);
          
        }
      
      });
    }
    else {
      e.preventDefault();
      next();
    }
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

  const Loader = () =>{
    return(
    <div className="successPageContainer">
            <svg  xmlns="http://www.w3.org/2000/svg" styles="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" stroke="#fbd46d" strokeWidth="4" r="41" strokeDasharray="193.20794819577225 66.40264939859075">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </circle>
            </svg>
        </div>)
  }

  // // Log data once state updates --------------------

  return (
    <div className="App">
      <Header />

      {pageIndex === 1 ?
        <SectionOne formData={formData} setFormData={setFormData} prev={prev} next={next} isHidden={isHidden} validate={validate} />
        : null}

      {pageIndex === 2 ?
        <SectionTwo formData={formData} setFormData={setFormData} prev={prev} next={next} isHidden={isHidden} validate={validate} />
        : null}

      {pageIndex === 3 ?
        <div>
          <SectionThree formData={formData} setFormData={setFormData} prev={prev} next={next} isHidden={isHidden} validate={validate} />
        </div>
        : null}

      {pageIndex === 4 ?
        <SectionFour formData={formData} setFormData={setFormData} prev={prev} next={next} isHidden={isHidden} validate={validate} />
        : null}

      {pageIndex === 5 ?
        <SectionFive formData={formData} setFormData={setFormData} prev={prev} next={next} isHidden={isHidden} validate={validate} />
        : null}

      {pageIndex === 6 ?
        <SectionSix formData={formData} setFormData={setFormData} prev={prev} next={next} isHidden={isHidden} validate={validate} />
        : null}

      {pageIndex === 7 ?
        <SectionSeven formData={formData} setFormData={setFormData} prev={prev} next={next} isHidden={isHidden} validate={validate} />
        : null}

      {pageIndex === 8 ?
        <SectionEight formData={formData} setFormData={setFormData} prev={prev} isHidden={isHidden} validate={validate} />
        : null}

      {pageIndex === 9 ?
        <>
          {loader? <Loader></Loader>:<SuccessPage/>}
        </>
        :
        null
      
      }

    </div>
  );
}

export default App;
