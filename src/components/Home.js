import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
	<div className='home'>
		<div className='home__container'>
			<img className='home__image' src='./images/home_image.jpg' alt='home-img'/>

			<div className='home__row'>
				{/*Product*/}
				<Product 
					id='8907340343'
					title='The Lean Startup: How Constant Innovation Creates Radicically Successful Business Paperback' 
					price={20.99} 
					image='./images/book1.jpg' 
					rating={5}
				/>
				<Product
					id='9032409232'
					title='Bhagavad Gita: A brief outline: The philosophical part concerning life' 
					price={10.99} 
					image='./images/book2.jpg' 
					rating={4}
				/>
			</div>

			<div className='home__row'>
				<Product
					id='3978458943'
					title='SAMSUNG Galaxy S10 Lite 4G LTE Prepaid Smartphone' 
					price={80.0} 
					image='./images/mobile1.jpg' 
					rating={5}
				/>
				<Product
					id='90947854224'
					title='SENZER SG500 Surround Sound Pro Gaming Headset' 
					price={29.99} 
					image='./images/headphone.jpg' 
					rating={5}
				/>
				<Product
					id='98253493832'
					title='Sony WI-XB400 Wireless In-Ear Extra Bass Headset/Headphones' 
					price={20.00} 
					image='./images/earphone.jpg' 
					rating={4}
				/>
			</div>

			<div className='home__row'>
				{/*Product*/}
				<Product
					id='383987982322'
					title='Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H | NVIDIA GeForce RTX 3060 Laptop' 
					price={9.99} 
					image='./images/laptop.jpg' 
					rating={4}
				/>
			</div>
		</div>
	</div>
  )
}

export default Home