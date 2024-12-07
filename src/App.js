import React from 'react'
function App () {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container px-4 px-lg-5'>
          <a className='navbar-brand' href='#!'>
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
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#!'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#!'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='https://t.me/usmanov_a7'>
                  Contact
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  id='navbarDropdown'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Shop
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className='dropdown-item' href='#!'>
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='#!'>
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#!'>
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className='d-flex'>
              <button className='btn btn-outline-dark' type='submit'>
                <i className='bi-cart-fill me-1'></i>
                Cart
                <span className='badge bg-dark text-white ms-1 rounded-pill'>
                  0
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* Section for displaying products */}

      <header className='bg-dark py-5'>
        <div className='container px-4 px-lg-5 my-y'>
          <div className='text-center text-white p-5'>
            <h1 className='display-4 fw-bolder'>Shop in style</h1>
            <p className='lead fw-normal text-white-50 mb-0'>
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>

      <section className='py-5'>
        <div className='container px-4 px-lg-5 mt-5'>
          <div
            className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'
            id='productWrapper'
          >
            {/* Sample Product Card */}

            <div className='col mb-5'>
              <div className='card h-100'>
                <img
                  className='card-img-top h-50 object-fit-cover'
                  style={{ cursor: 'pointer' }}
                  src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                  alt='Product'
                />
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Мехроп 42 см 34.000 сум</h5>
                  </div>
                </div>
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a
                      className='btn btn-outline-dark mt-auto'
                      href='./detail.html?id=${product.id}'
                    >
                      Savatga qo‘shish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                <img
                  className='card-img-top h-50 object-fit-cover'
                  style={{ cursor: 'pointer' }}
                  src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                  alt='Product'
                />
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Мехроп 42 см 34.000 сум</h5>
                  </div>
                </div>
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a
                      className='btn btn-outline-dark mt-auto'
                      href='./detail.html?id=${product.id}'
                    >
                      Savatga qo‘shish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                <img
                  className='card-img-top h-50 object-fit-cover'
                  style={{ cursor: 'pointer' }}
                  src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                  alt='Product'
                />
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Мехроп 42 см 34.000 сум</h5>
                  </div>
                </div>
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a
                      className='btn btn-outline-dark mt-auto'
                      href='./detail.html?id=${product.id}'
                    >
                      Savatga qo‘shish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                <img
                  className='card-img-top h-50 object-fit-cover'
                  style={{ cursor: 'pointer' }}
                  src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                  alt='Product'
                />
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Мехроп 42 см 34.000 сум</h5>
                  </div>
                </div>
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a
                      className='btn btn-outline-dark mt-auto'
                      href='./detail.html?id=${product.id}'
                    >
                      Savatga qo‘shish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                <img
                  className='card-img-top h-50 object-fit-cover'
                  style={{ cursor: 'pointer' }}
                  src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                  alt='Product'
                />
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Мехроп 42 см 34.000 сум</h5>
                  </div>
                </div>
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a
                      className='btn btn-outline-dark mt-auto'
                      href='./detail.html?id=${product.id}'
                    >
                      Savatga qo‘shish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                <img
                  className='card-img-top h-50 object-fit-cover'
                  style={{ cursor: 'pointer' }}
                  src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                  alt='Product'
                />
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Мехроп 42 см 34.000 сум</h5>
                  </div>
                </div>
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a
                      className='btn btn-outline-dark mt-auto'
                      href='./detail.html?id=${product.id}'
                    >
                      Savatga qo‘shish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                <img
                  className='card-img-top h-50 object-fit-cover'
                  style={{ cursor: 'pointer' }}
                  src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                  alt='Product'
                />
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Мехроп 42 см 34.000 сум</h5>
                  </div>
                </div>
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a
                      className='btn btn-outline-dark mt-auto'
                      href='./detail.html?id=${product.id}'
                    >
                      Savatga qo‘shish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                <img
                  className='card-img-top h-50 object-fit-cover'
                  style={{ cursor: 'pointer' }}
                  src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                  alt='Product'
                />
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Мехроп 42 см 34.000 сум</h5>
                  </div>
                </div>
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a
                      className='btn btn-outline-dark mt-auto'
                      href='./detail.html?id=${product.id}'
                    >
                      Savatga qo‘shish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                <img
                  className='card-img-top h-50 object-fit-cover'
                  style={{ cursor: 'pointer' }}
                  src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                  alt='Product'
                />
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Мехроп 42 см 34.000 сум</h5>
                  </div>
                </div>
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a
                      className='btn btn-outline-dark mt-auto'
                      href='./detail.html?id=${product.id}'
                    >
                      Savatga qo‘shish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                <img
                  className='card-img-top h-50 object-fit-cover'
                  style={{ cursor: 'pointer' }}
                  src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                  alt='Product'
                />
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Мехроп 42 см 34.000 сум</h5>
                  </div>
                </div>
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a
                      className='btn btn-outline-dark mt-auto'
                      href='./detail.html?id=${product.id}'
                    >
                      Savatga qo‘shish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                <img
                  className='card-img-top h-50 object-fit-cover'
                  style={{ cursor: 'pointer' }}
                  src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                  alt='Product'
                />
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Мехроп 42 см 34.000 сум</h5>
                  </div>
                </div>
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a
                      className='btn btn-outline-dark mt-auto'
                      href='./detail.html?id=${product.id}'
                    >
                      Savatga qo‘shish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                <img
                  className='card-img-top h-50 object-fit-cover'
                  style={{ cursor: 'pointer' }}
                  src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                  alt='Product'
                />
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Мехроп 42 см 34.000 сум</h5>
                  </div>
                </div>
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a
                      className='btn btn-outline-dark mt-auto'
                      href='./detail.html?id=${product.id}'
                    >
                      Savatga qo‘shish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more product cards here as needed */}
          </div>
        </div>
      </section>

      {/* Section and */}

      <footer class='py-5 bg-dark'>
        <div class='container'>
          <p class='m-0 text-center text-white'>
            Copyright &copy; Rishton Ceramics 2024
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App


