import React from 'react'
import Dasharrow from "../Logo/Vectorarrow.svg"
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const SingleProduct = () => {
  return (
    <div>
        <section>
            <div>
                <Link to="/">Home</Link>
                <img src={Dasharrow} alt="" />
                <Link to="/shop">Shop</Link>
                <img src={Dasharrow} alt="" />
                
            </div>
        </section>
        <section>
            <div>
                <div>
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Final%20Project/Single%20product/lybw9h9igowpeunfbvyf' alt='' />
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Final%20Project/Single%20product/ccuvndodoatxpzcger0l' alt='' />
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Final%20Project/Single%20product/ov1fbbirrdsx5p0sehzr' alt='' />
                    
                </div>
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Final%20Project/Single%20product/lybw9h9igowpeunfbvyf' alt='' />
            </div>
            <div></div>
        </section>
        <section>
            <p>Description <span>Additional Information</span> <span>Review[5]</span></p>
            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            <div>
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Final%20Project/Single%20product/irrbv1bdupptzmzkarpo' alt='' />
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Final%20Project/Single%20product/g6fntahhyrzdp9n4iv9f' alt='' />
            </div>
        </section>
        <section>
            <h2>Related Product</h2>
        <div className='categoryimage'>
            <div className='photo2'>
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Our%20product/etkjagbgb5u2ubmn4amp' alt='Syltherine' />
              <p className='photo2title'>Syltherine</p>
              <p><span span className='span1'>Stylish cafe chair</span></p>
              <p className='photo2tag'>Rp 2.500.000 <span className='span2'>Rp 3.500.000</span></p>
            </div>
            <div className='photo2'>
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Our%20product/sovsmlnf5zzhkkgiv3il' alt='Laviosa' />
              <p className='photo2title'>Laviosa</p>
              <p><span className='span1'>Stylish cafe chair</span></p>
              <p className='photo2tag'>Rp 2.500.000</p>
            </div>
            <div className='photo2'>
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Our%20product/ppej9chpm34ul9xr49lj' alt='Lolito' />
              <p className='photo2title'>Lolito</p>
              <p><span className='span1'>Luxury big sofa</span></p>
              <p className='photo2tag'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
            </div>
            <div className='photo2'>
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Our%20product/scmbtieyzqwxhtxqwzwm' alt='Respira' />
              <p className='photo2title'>Respira</p>
              <p><span className='span1'>Outdoor bar table and stool</span></p>
              <p className='photo2tag'>Rp 500.000</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default SingleProduct
