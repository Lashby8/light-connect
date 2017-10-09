import React from 'react';
import logo from '../../assets/logo.svg';
import '../../css/App.css';

const RotatedLogo = ({ animatonClass }) => (
    <div className='rotatedLogoContainer'>
        <img className={animatonClass} src={logo}></img>
    </div>
);

export default RotatedLogo;