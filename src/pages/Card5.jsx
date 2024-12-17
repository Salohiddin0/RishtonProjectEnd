import 'bootstrap/dist/css/bootstrap.min.css'
import img5 from '../img/IMG_5542.JPG'

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
        <div className='d-flex justify-content-end me-4'>
        <button style={{ marginLeft: '150px' }} className='btn btn-danger'>
          {!props.isBack && (
            <a
              style={{ fontFamily: 'monospace', fontSize: '20px' }}
              className='nav-link'
              href='/'
            >
              <svg
                style={{ marginRight: '20px' }}
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                fill='currentColor'
                class='bi bi-arrow-left-square-fill'
                viewBox='0 0 16 16'
              >
                <path d='M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1' />
              </svg>
              Back
            </a>
          )}
        </button>
      </div>
      <div className='container px-4 px-lg-5 my-5'>
        <div id='detailWrap' className='row gx-4 gx-lg-5 align-items-center'>
          <div className='col-md-6'>
            <img
              className='card-img-top mb-5 mb-md-0'
              src={img5}
              alt='Mexrop'
            />
          </div>
          <div className='col-md-6'>
            <div className='small mb-1'></div>
            <h1 className='display-5 fw-bolder'>Мехроп</h1>
            <div className='fs-5 mb-5'>
              <span>21.000 сум</span>
              <span></span>
            </div>
            <p className='lead'>
              Rishton laganlari odatda 30-50 sm diametrda bo‘ladi. Narxi
              naqshining murakkabligiga va qo‘l mehnatiga bog‘liq holda
              o‘zgaradi, lekin umumiy narx oralig‘i 100,000 so‘mdan bir necha
              yuz ming so‘mgacha bo‘lishi mumkin.
            </p>
            <div className='d-flex'>
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
      </div>
    </section>
  )
}

export default App
