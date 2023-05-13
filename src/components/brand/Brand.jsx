import React from 'react';
import './brand.css';
import{ google,atlassian,slack,dropbox,shopify} from './imports';



const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google" />
        <img src={atlassian} alt="atlassian" />
        <img src={slack} alt="slack" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand