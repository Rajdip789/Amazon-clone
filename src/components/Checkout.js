import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
	const [{basket, user}, dispatch] = useStateValue();
	return (
		<div className='checkout'>
			<div className='checkout__left'>
				<img className='chekcout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt='checkoutBanner'/>
				
				<div>
					<h3>{user? 'Hello, ' + user.email : ''} </h3>
					<h2 className='checkout__title'>
						Your shopping Basket
					</h2>

					{/* <CheckoutProduct/> */}
					{basket.map(item => (
						<CheckoutProduct 
							id= {item.id}
							image= {item.image}
							title= {item.title}
							price= {item.price}
							rating= {item.rating}
						/>
					))}
				</div>
			</div>

			<div className='checkout__right'>
				<Subtotal/>
			</div>
		</div>
	)
}

export default Checkout