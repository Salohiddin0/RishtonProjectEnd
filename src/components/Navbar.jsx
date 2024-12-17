import { useState } from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container px-4 px-lg-5'>
        <a style={{fontFamily: 'monospace', fontSize: '29px'}} className='navbar-brand' href='http://localhost:3000/'>
          Usmanov Ceramics
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4'>
            <li className='nav-item align'>
              <a style={{fontFamily: 'monospace', fontSize: '20px'}} className='nav-link' href='https://t.me/napishupopoje'>
                Contact
              </a>
            </li>
            <li className='nav-item'>
              <a
              style={{fontFamily: 'monospace', fontSize: '20px'}}
                className='nav-link'
                href='https://www.instagram.com/asiljon_0707?igsh=a3F5c3FjN254MTc4'
              >
                instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
