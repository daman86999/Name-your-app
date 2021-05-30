import React from 'react';
import pic from './../../images/1.png';
import './Header.css'

const Header = ({headerExpanded,headTitle}) => {
    
  
        return ( 
            <div className="head-container">
                <img src={pic} className={` head-image ${headerExpanded ? `head-image-expanded` : `head-image-contracted`}`} alt="headerImage"/>
                <h1 className={`head-text ${headerExpanded ? `head-text-expanded` : `head-text-contracted`}`} >{headTitle}</h1>
            </div>
         );
    
};
 
export default Header;