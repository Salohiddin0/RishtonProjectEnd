import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from '../img/IMG_5540.JPG'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <DetailSection />
    </>
  )
}

const DetailSection = (props) => {
  return (
    <section className='py-5'>
      <button style={{marginLeft: '150px'}} className='btn btn-dark'>
        {!props.isBack && (
          <a
            style={{ fontFamily: 'monospace', fontSize: '20px' }}
            className='nav-link'
            href='/'
          >
            Back
          </a>
        )}
      </button>
      <div className='container px-4 px-lg-5 my-5'>
        <div id='detailWrap' className='row gx-4 gx-lg-5 align-items-center'>
          <div className='col-md-6'>
            <img
              className='card-img-top mb-5 mb-md-0'
              src={img1}
              alt='Mexrop'
            />
          </div>
          <div className='col-md-6'>
            <div className='small mb-1'></div>
            <h1 className='display-5 fw-bolder'>Мехроп</h1>
            <div className='fs-5 mb-5'>
              <span>34.000 сум</span>
              {/* <span>$40.00</span> */}
            </div>
            <p className='lead'>
              Rishton laganlari odatda 30-50 sm diametrda bo‘ladi. Narxi
              naqshining murakkabligiga va qo‘l mehnatiga bog‘liq holda
              o‘zgaradi, lekin umumiy narx oralig‘i 100,000 so‘mdan bir necha
              yuz ming so‘mgacha bo‘lishi mumkin.
            </p>

            <button
              className='btn btn-outline-dark flex-shrink-0'
              type='button'
            >
              <a
                className='bi-cart-fill me-1 list-group-item'
                href='https://t.me/napishupopoje'
              >
                Add to cart
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
