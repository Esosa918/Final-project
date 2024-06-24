import React from 'react'
import './Home.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Browse/kada2w2vrt1o7eh4mqw6' alt='dining' />
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Browse/xslelg00jjhijumxiw5f' alt='living' />
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Browse/skokzwcp2z26gpdtzks1' alt='bedroom' />
                
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
                    <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Our%20product/etkjagbgb5u2ubmn4amp' alt='Syltherine' />
                    <p className='blue'>Syltherine</p>
                    <p><span className='white'>Stylish cafe chair</span></p>
                    <p className='white1'>Rp 2.500.000<span className='white2'>Rp 3.500.000</span></p>
                </div>
                <div className='red2'>
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Our%20product/sovsmlnf5zzhkkgiv3il' alt='Laviosa' />
                    <p className='blue'>Laviosa</p>
                    <p><span className='white'>Stylish cafe chair</span></p>
                    <p className='white1'>Rp 2.500.000</p>
                </div>
                <div className='red2'>
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Our%20product/ppej9chpm34ul9xr49lj' alt='Lolito' />
                    <p className='blue'>Lolito</p>
                    <p><span className='white'>Luxury big sofa</span></p>
                    <p className='white1'>Rp 7.000.000<span className='white2'>Rp 14.000.000</span></p>
                </div>
                <div className='red2' >
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Our%20product/scmbtieyzqwxhtxqwzwm' alt='Respira' />
                    <p className='blue'>Respira</p>
                    <p><span className='white'>Outdoor bar table and stool</span></p>
                    <p className='white1'>Rp 500.000</p>
                </div>
            </div>
            <div className='red1'>
                <div className='red2'>
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Our%20product/mlstvjphydi859ecll7g' alt='Grifo' />
                    <p className='blue'>Grifo</p>
                    <p><span className='white'>Night lamp</span></p>
                    <p className='white1'>Rp 1.500.000</p>
                </div>
                <div className='red2'>
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Our%20product/ucrujeiuq3drlhl1dfho' alt='Muggo' />
                    <p className='blue'>Muggo</p>
                    <p><span className='white'>Small mug</span></p>
                    <p className='white1'>Rp 7.000.000</p>
                </div>
                <div className='red2'>
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Our%20product/ucrujeiuq3drlhl1dfho' alt='Pingky' />
                    <p className='blue'>Pingky</p>
                    <p><span className='white'>Cute bed set</span></p>
                    <p className='white1'><span className='white2'>Rp 14.000.000</span></p>
                </div>
                <div className='red2'>
                <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Our%20product/asc8dbxvilcjzeyvf5gj' alt='Potty' />
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
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Rooms/afcjnlihyashai7ma3ue' alt='innerPeace' />
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Rooms/vviypggjttpe7iohpazg' alt='innerPeace1' />

            </div>
        </section>
        <section>
            <div>
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Furniture/lw3rqfn3bvfpzibnrcbl' alt='img1' />
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Furniture/wveiysovuhi0xlvdop4l' alt='img2' />
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Furniture/j06h5qidgta3bzcgsaeg' alt='img3' />
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Furniture/bizkcnr8aqhm0y164ucv' alt='img4' />
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Furniture/tlyoeanreazmmy4ihubh' alt='img5' />
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Furniture/anoie4dnesvleejqwdn6' alt='img6' />
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Furniture/aqoeh74qtfkkf63aoyum' alt='img7' />
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Furniture/je01cpww3tfgu425m68m' alt='img8' />
            <LazyLoadImage src='https://res.cloudinary.com/dn61rvaob/image/upload/f_auto,q_auto/v1/Project%20E-C/Furniture/dlmda0xbyhz8bwysnowa' alt='img9' />
            </div>
        </section>
    </div>
  )
}

export default Home