import React from 'react'
import Header from '../components/Header';
const About = () => {
  return (
    <div>
    <Header name="About Game Shop" />
    <br />
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className='about' alt="" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className='display-5'>Trading Hours:</h1>
          <span className='fw-bold text-primary'>Mon to Fri: 8:00AM to 5:00PM</span>
          <span className='fw-bold text-primary'>Sat to Sun: 9:00AM to 1:00PM</span>
          <br />
          <h1 className='display-5'>Contact:</h1>
          <span className='fw-bold text-primary'>071 043 3326</span>
          <span className='fw-bold text-primary'>Gamestore@sa.com</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About