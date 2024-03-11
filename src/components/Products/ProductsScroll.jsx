import invoice from '../../assets/invoice-product.png';
import calendar from '../../assets/calendar-product.png';
import email from '../../assets/email-product.png';
import profile from '../../assets/pofile-product.png';


export default function ProductsScroll() {
    return(
        <>
            <div className='products-scroll-container '>
                <div className='products-child'> 
                    <img src={calendar} alt='invoice' />
                    <p>Calendar</p>
                </div>
                
                <div className='products-child'> 
                    <img src={invoice} alt='' />
                    <p>Invoice</p>
                </div>
               
                <div className='products-child'> 
                    <img src={email} alt='' />
                    <p>Email</p>
                </div>
                
                <div className='products-child'> 
                    <img src={profile} alt='' />
                    <p>Profiles</p>
                </div>
                
            </div>
        </>
    )
}
