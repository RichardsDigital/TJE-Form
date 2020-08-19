import React from 'react';
import logo from '../../images/TJE.png';

const Header = () => {
    return (
        <div id="pageHeader">
            <div className="headerContainer">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <h1>Application Form</h1>
            </div>
        </div>
    )
}

export default Header;