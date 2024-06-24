import React from 'react'
import { Image } from 'cloudinary-react'
import { Link } from 'react-router-dom'
import MainLogo from "../Logo/logo.svg"
import Trophy from "../Logo/Vector0.svg"
import Warrantee from "../Logo/Vector1.svg"
import Hand from "../Logo/shipping.svg"
import Call from "../Logo/Vector2.svg"
import Dasharrow from "../Logo/Vectorarrow.svg"
import { Part4, cloudName } from '../Cloudimages/Cloud'
import './Shop.css'

const Shop = () => {
  return (
    <div>
         <section className='contactpart1'>
            <img src={MainLogo} alt="" />
            <h1>Shop</h1>
            <div>
                <Link to="/">Home</Link>
                <img src={Dasharrow} alt="" />
                <Link to="/shop">Shop</Link>
            </div>
        </section>
        <section className='shoppart1'>
            <div className='shoparea'>
      
                <p className='view'>Filter</p>
                
                
                <p className='view'>Showing 1–16 of 32 results</p>
            </div>
            <div className='shopaisle'>
                <p className='view'>Show<span className='span'>16</span></p>
                <p className='view'>Sortby<span className='span'>Default</span></p>
            </div>
        </section>
        <section className='category'>
        <div className='categoryimage'>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.syltherine}></Image>
              <p className='photo2title'>Syltherine</p>
              <p><span span className='span1'>Stylish cafe chair</span></p>
              <p className='photo2tag'>Rp 2.500.000 <span className='span2'>Rp 3.500.000</span></p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.syltherine}></Image>
              <p className='photo2title'>Syltherine</p>
              <p><span span className='span1'>Stylish cafe chair</span></p>
              <p className='photo2tag'>Rp 2.500.000 <span className='span2'>Rp 3.500.000</span></p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.syltherine}></Image>
              <p className='photo2title'>Syltherine</p>
              <p><span span className='span1'>Stylish cafe chair</span></p>
              <p className='photo2tag'>Rp 2.500.000 <span className='span2'>Rp 3.500.000</span></p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.syltherine}></Image>
              <p className='photo2title'>Syltherine</p>
              <p><span span className='span1'>Stylish cafe chair</span></p>
              <p className='photo2tag'>Rp 2.500.000 <span className='span2'>Rp 3.500.000</span></p>
            </div>
          </div>
          <div className='categoryimage'>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.leviosa}></Image>
              <p className='photo2title'>Laviosa</p>
              <p><span className='span1'>Stylish cafe chair</span></p>
              <p className='photo2tag'>Rp 2.500.000</p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.leviosa}></Image>
              <p className='photo2title'>Laviosa</p>
              <p><span className='span1'>Stylish cafe chair</span></p>
              <p className='photo2tag'>Rp 2.500.000</p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.leviosa}></Image>
              <p className='photo2title'>Laviosa</p>
              <p><span className='span1'>Stylish cafe chair</span></p>
              <p className='photo2tag'>Rp 2.500.000</p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.leviosa}></Image>
              <p className='photo2title'>Laviosa</p>
              <p><span className='span1'>Stylish cafe chair</span></p>
              <p className='photo2title'>Rp 2.500.000</p>
            </div>
          </div>
          <div className='categoryimage'>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.lolito}></Image>
            <p className='photo2title'>Lolito</p>
              <p><span className='span1'>Luxury big sofa</span></p>
              <p className='photo2tag'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.lolito}></Image>
              <p className='photo2title'>Lolito</p>
              <p><span className='span1'>Luxury big sofa</span></p>
              <p className='photo2tag'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.lolito}></Image>
              <p className='photo2title'>Lolito</p>
              <p><span className='span1'>Luxury big sofa</span></p>
              <p className='photo2tag'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.lolito}></Image>
              <p className='photo2title'>Lolito</p>
              <p><span className='span1'>Luxury big sofa</span></p>
              <p className='photo2tag'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
            </div>
          </div>
          <div className='categoryimage'>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.respira}></Image>
              <p className='photo2title'>Respira</p>
              <p><span className='span1'>Outdoor bar table and stool</span></p>
              <p className='photo2tag'>Rp 500.000</p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.respira}></Image>
              <p className='photo2title'>Respira</p>
              <p><span className='span1'>Outdoor bar table and stool</span></p>
              <p className='photo2tag'>Rp 500.000</p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.respira}></Image>
              <p className='photo2title'>Respira</p>
              <p><span className='span1'>Outdoor bar table and stool</span></p>
              <p className='photo2tag'>Rp 500.000</p>
            </div>
            <div className='photo2'>
            <Image  cloudName={cloudName} publicId={Part4.respira}></Image>
              <p className='photo2title'>Respira</p>
              <p><span className='span1'>Outdoor bar table and stool</span></p>
              <p className='photo2tag'>Rp 500.000</p>
            </div>
          </div>
          </section>
          <section className="contactpart3">
        <div className="contactframe">
          <div className="frame">
            <img src={Trophy} alt="" />
            <div>
              <h4>High Quality</h4>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div className="frame">
            <img src={Warrantee} alt="" />
            <div>
              <h4>Warranty Protection</h4>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className="frame">
            <img src={Hand} alt="" />
            <div>
              <h4>Free Shipping</h4>
              <p>Order over 150 $</p>
            </div>
          </div>
          <div className="frame">
            <img src={Call} alt="" />
            <div>
              <h4>Order over 150 $</h4>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop
 