import React from 'react'
import FooterLinks from './FooterLinks'
const Footer = () => {
  return (
    <div className='bg-slate-600 w-full h-52 relative'>
      <div>
        <FooterLinks label={"Contact Us"}/>
        <FooterLinks label={"About Us"}/>
        <FooterLinks label={"Terms and Conditions"}/>
        <FooterLinks label={"Feedback"}/>
      
      </div>

    </div>
  )
}

export default Footer