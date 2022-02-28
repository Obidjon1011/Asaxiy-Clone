import React from 'react'
import Kitob1 from '../../Media/kitob1.png'
import Kitob2 from '../../Media/kitob2.png'
import Kitob3 from '../../Media/kitob3.png'
import Kitob4 from '../../Media/kitob4.png'
import Kitob5 from '../../Media/kitob5.png'
import Cart from '../../Media/cart.svg'
import Img1 from '../../Media/m2img.jpg'
import { Button} from 'reactstrap'
import SocialMedia from './SocialMedia'




export default function Main1() {
    return (
        <>
            <div className='bg-white bMain mt-2 card'>
                <div className='p-3 text-center border-bottom'>
                    <img width='60px' className='float-start' src={Kitob1} alt='Kitob'  />
                    <strong>Gruziya movfaqiyatga qanday erishdi?</strong><br />
                    <small>Kitob Avtori</small>
                </div>  
                <div className='p-3 text-center border-bottom'>
                    <img width='60px' className='float-start' src={Kitob2} alt='Kitob'  />
                    <strong>Qorqma</strong><br />
                    <small>Kitob Avtori</small>
                </div>  
                <div className='p-3 text-center border-bottom'>
                    <img width='60px' className='float-start' src={Kitob3} alt='Kitob'  />
                    <strong>Yuqumlik. Mahsulot va G'oyalar Qanday</strong><br />
                    <small>Kitob Avtori</small>
                </div>  
                <div className='p-3 text-center border-bottom'>
                    <img width='60px' className='float-start' src={Kitob4} alt='Kitob'  />
                    <strong>Steve Jobs</strong><br />
                    <small>Kitob Avtori</small>
                </div>  
                <div className='p-3 text-center'>
                    <img width='60px' className='float-start' src={Kitob5} alt='Kitob'  />
                    <strong>Chalg'ituvchi dunyoda muvaffiqiyat sirlari</strong><br />
                    <small>Kitob Avtori</small>
                </div>  
            </div>
            <div className='border-right card m1b mt-5 sm_none' >
                <div className='card-body'>
                    <div className='text-center'>
                        <img width='160px'  src={Img1} alt='Img' />
                    </div>
                    <span className='s'>Elektorink Kitob PocketBook 624 Touch lux 4</span><br />
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i><br />
                    <small className='text-danger'><del>1 520 000</del></small><br />
                    <span className='float-start '>1 241 000</span>
                    <img className='float-end m-0' src={Cart} alt='cart' />
                    <Button className='All-buttons float-end mt-5'>PocketBook</Button><br />
                </div>
            </div>
            <div className='border-right card m1b mt-5 sm_none' >
                <div className='card-body'>
                    <div className='text-center'>
                        <img width='160px'  src={Img1} alt='Img' />
                    </div>
                    <span className='s'> Elektorink Kitob PocketBook 624 Touch lux 4</span><br />
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i><br />
                    <small className='text-danger'><del>1 520 000</del></small><br />
                    <span className='float-start'>1 241 000</span>
                    <img className='float-end m-0' src={Cart} alt='cart' />
                    <Button className='All-buttons mt-5 float-end'>PocketBook</Button><br />
                </div>
            </div>
            <SocialMedia />
        </>
    )
}
