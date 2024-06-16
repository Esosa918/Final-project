import React from 'react'
import { Image } from  "cloudinary-react"
import { Part1, Part2, Part3, Part4, cloudName } from '../Cloudimages/Cloud'
import './Home.css'

const Home = () => {
  return (
    <div>
        <div className='left'> 
            <div className='left2'>
                <div className='left3'>
                    <p className='l1'>New Arrival</p>
                    <h2 className='l2'>Discover Our <br></br> New Collection </h2>
                    <p className='l3'></p>
                    <button className='yellow'>Buy Now</button>
                </div>
            </div>
        </div>
        <section className='front'>
            <h3>Browse The Range</h3>
            <p></p>
            <div className='front1'>
                <Image cloudName={cloudName} publicId={Part1.dining}></Image>
                <Image cloudName={cloudName} publicId={Part1.living}></Image>
                <Image cloudName={cloudName} publicId={Part1.bedroom}></Image>
            </div>
            <div className='front2'>
                <p>Dining</p>
                <p>living</p>
                <p>Bedroom</p>
            </div>
        </section>
        <section className='red'>
            <h2>Our Products</h2>
            <div className='red1'>
                <div className='red2'>
                    <Image cloudName={cloudName} publicId={Part4.syltherine}></Image>
                    <p className='blue'>Syltherine</p>
                    <p><span className='white'>Stylish cafe chair</span></p>
                    <p className='white1'>Rp 2.500.000<span className='white2'>Rp 3.500.000</span></p>
                </div>
                <div className='red2'>
                    <Image cloudName={cloudName} publicId={Part4.leviosa}></Image>
                    <p className='blue'>Laviosa</p>
                    <p><span className='white'>Stylish cafe chair</span></p>
                    <p className='white1'>Rp 2.500.000</p>
                </div>
                <div className='red2'>
                    <Image cloudName={cloudName} publicId={Part4.lolito}></Image>
                    <p className='blue'>Lolito</p>
                    <p><span className='white'>Luxury big sofa</span></p>
                    <p className='white1'>Rp 7.000.000<span className='white2'>Rp 14.000.000</span></p>
                </div>
                <div className='red2' >
                    <Image cloudName={cloudName} publicId={Part4.respira}></Image>
                    <p className='blue'>Respira</p>
                    <p><span className='white'>Outdoor bar table and stool</span></p>
                    <p className='white1'>Rp 500.000</p>
                </div>
            </div>
            <div className='red1'>
                <div className='red2'>
                    <Image cloudName={cloudName} publicId={Part4.grifo}></Image>
                    <p className='blue'>Grifo</p>
                    <p><span className='white'>Night lamp</span></p>
                    <p className='white1'>Rp 1.500.000</p>
                </div>
                <div className='red2'>
                    <Image cloudName={cloudName} publicId={Part4.muggo}></Image>
                    <p className='blue'>Muggo</p>
                    <p><span className='white'>Small mug</span></p>
                    <p className='white1'>Rp 7.000.000</p>
                </div>
                <div className='red2'>
                    <Image cloudName={cloudName} publicId={Part4.pingky}></Image>
                    <p className='blue'>Pingky</p>
                    <p><span className='white'>Cute bed set</span></p>
                    <p className='white1'><span className='white2'>Rp 14.000.000</span></p>
                </div>
                <div className='red2'>
                    <Image cloudName={cloudName} publicId={Part4.potty}></Image>
                    <p className='blue'>Potty</p>
                    <p><span className='white'>MInimalist flower pot</span></p>
                    <p className='white1'>Rp 500.000</p>
                </div>
            </div>
            <button>Show More </button>
        </section>
        <section>
            <div></div>
            <div>
                <Image cloudName={cloudName} publicId={Part2.innerPeace}></Image>
                <Image cloudName={cloudName} publicId={Part2.innerPeace1}></Image>

            </div>
        </section>
        <section>
            <div>
                <Image cloudName={cloudName} publicId={Part3.img1}></Image>
                <Image cloudName={cloudName} publicId={Part3.img2}></Image>
                <Image cloudName={cloudName} publicId={Part3.img3}></Image>
                <Image cloudName={cloudName} publicId={Part3.img4}></Image>
                <Image cloudName={cloudName} publicId={Part3.img5}></Image>
                <Image cloudName={cloudName} publicId={Part3.img6}></Image>
                <Image cloudName={cloudName} publicId={Part3.img7}></Image>
                <Image cloudName={cloudName} publicId={Part3.img8}></Image>
                <Image cloudName={cloudName} publicId={Part3.img9}></Image>

            </div>
        </section>
    </div>
  )
}

export default Home