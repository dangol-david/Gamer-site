import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <>
      <footer>
        <div className="container bg-image p-5 text-center  " >
          <div className="row">
            <div className="col">
         

              <img className='w-25 ' src="https://themes.pixelstrap.com/multikart/assets/images/icon/footerlogo.png" alt="" />
              <p className='text-light pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ex atque! Nesciunt repellendus magni repellat est eveniet perferendis, quis aspernatur.</p>
            </div>
            <div className="col">
              <h2 className='text-light'>NEWSLETTER</h2>
              <form action=""><input type="text" placeholder='Enter your mail' className='py-2 pe-5' /></form>
              <button className='bg-danger text-light'> Subscribe</button>
            </div>
            <div className="col text-light p-0">
              <h4>STORE INFORMATION</h4>
              
                <p>Multikart Demo Store, Demo</p>
                <p>store India 345-659</p>
                <p>Call Us: 123-456-7898</p>
                <p>Email Us: Support@Multikart.com</p>
              
            </div>
          </div>
        </div>
        <section className='bg-dark'>
        <div className="container">
          <div className="row p-1 mb-3      justify-content-between ">
            <div className="col text-light text-start">
            <p> 2023-24 themeforest powered by pixelstrap</p>
            </div>
            <div className="col text-light pe-2 gap-2 text-end">
            <img src="https://themes.pixelstrap.com/multikart/assets/images/icon/visa.png" alt="" />
              <img src="https://themes.pixelstrap.com/multikart/assets/images/icon/mastercard.png" alt="" />
              <img src="https://themes.pixelstrap.com/multikart/assets/images/icon/paypal.png" alt="" />
              <img src="https://themes.pixelstrap.com/multikart/assets/images/icon/american-express.png" alt="" />
         
            </div>
            
          </div>
        </div>
        </section>
        {/* <section className=' p-1 mb-3 bg-dark text-light  d-flex justify-content-between '>
          <div className='text-center'>
              <p> 2023-24 themeforest powered by pixelstrap</p>
              

          </div>
          <div className='text-center'>
          <img src="https://themes.pixelstrap.com/multikart/assets/images/icon/visa.png" alt="" />
              <img src="https://themes.pixelstrap.com/multikart/assets/images/icon/mastercard.png" alt="" />
              <img src="https://themes.pixelstrap.com/multikart/assets/images/icon/paypal.png" alt="" />
              <img src="https://themes.pixelstrap.com/multikart/assets/images/icon/american-express.png" alt="" />
          </div>
        </section> */}
      </footer>
    </>
  )
}

export default Footer
