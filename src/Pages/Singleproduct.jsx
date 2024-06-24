import React from 'react'
import { SingleProductImages } from '../Cloudimages/Cloud'
import Dasharrow from "../Logo/Vectorarrow.svg"
import { Part4, cloudName } from '../Cloudimages/Cloud'

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
                    <Image cloudName={cloudName} publicId={SingleProductImages.sofa4}></Image>
                    <Image cloudName={cloudName} publicId={SingleProductImages.sofa5}></Image>
                    <Image cloudName={cloudName} publicId={SingleProductImages.sofa6}></Image>
                </div>
                <Image cloudName={cloudName} publicId={SingleProductImages.sofa3}></Image>
            </div>
            <div></div>
        </section>
        <section>
            <p>Description <span>Additional Information</span> <span>Review[5]</span></p>
            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            <div>
                <Image cloudName={cloudName} publicId={SingleProductImages.sofa1}></Image>  
                <Image cloudName={cloudName} publicId={SingleProductImages.sofa2}></Image>  
            </div>
        </section>
        <section>
            <h2>Related Product</h2>
        <div className='categoryimage'>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.syltherine}></Image>
              <p className='photo2title'>Syltherine</p>
              <p><span span className='span1'>Stylish cafe chair</span></p>
              <p className='photo2tag'>Rp 2.500.000 <span className='span2'>Rp 3.500.000</span></p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.leviosa}></Image>
              <p className='photo2title'>Laviosa</p>
              <p><span className='span1'>Stylish cafe chair</span></p>
              <p className='photo2tag'>Rp 2.500.000</p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.lolito}></Image>
              <p className='photo2title'>Lolito</p>
              <p><span className='span1'>Luxury big sofa</span></p>
              <p className='photo2tag'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.respira}></Image>
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
