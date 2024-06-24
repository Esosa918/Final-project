import React from 'react'
import { Link } from 'react-router-dom'
import MainLogo from "../Logo/logo.svg"
import Trophy from "../Logo/Vector0.svg"
import Warrantee from "../Logo/Vector1.svg"
import Hand from "../Logo/shipping.svg"
import Call from "../Logo/Vector2.svg"
import Dasharrow from "../Logo/Vectorarrow.svg"

const ProductComparison = () => {
  return (
    <div>
        <section className='contactpart1'>
            <img src={MainLogo} alt="" />
            <h1>Shop</h1>
            <div>
                <Link to="/">Home</Link>
                <img src={Dasharrow} alt="" />
                <Link to="/productcomparison">Comparison</Link>
            </div>
        </section>
        <section className='contactpart3'>
            <div className='frame'>
                <img src={Trophy} alt="" />
                <div>
                    <h4>High Quality</h4>
                    <p>crafted from top materials</p>
                </div>
            </div>
            <div className='frame'>
                <img src={Warrantee} alt="" />
                <div>
                    <h4>Warranty Protection</h4>
                    <p>Over 2 years</p>
                </div>  
            </div>
            <div className='frame'>
                <img src={Hand} alt="" />
                <div>
                    <h4>Free Shipping</h4>
                    <p>Order over 150 $</p>
                </div>
            </div>
            <div className='frame'>
                <img src={Call} alt="" />
                <div>
                    <h4>Order over 150 $</h4>
                    <p>Dedicated support</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProductComparison