import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css'
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Header() {
	const [{basket, user}, dispatch] = useStateValue();
	//console.log(useStateValue);

	const handleAuthentication = () => {
		if(user) {
			signOut(auth);
		}
	}
	return (
		<div className='header'>
			<Link to="/">
				{/*Header logo*/}
				<img className='header__logo' src="./images/amazon_logo.png"/>
			</Link>
			
			{/*Header search*/}
			<div className='header__search'>
				{/*Header input*/}
				<input className='header__searchInput' type="text"/>
				{/*LOGO*/}
				<SearchIcon className='header__searchIcon'/>
			</div>

			{/*Header nav*/}
			<Link to='/login'>
				<div className='header__nav'>
					<Link to={!user && '/login'}>
						<div onClick={handleAuthentication} className='header__option'>
							<span className='header_optionLineOne'>{user? 'Hello ' + user.email : 'Hello Guest'}</span>
							<span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
						</div>
					</Link>
					<div className='header__option'>
						<span className='header_optionLineOne'>Returns</span>
						<span className='header_optionLineTwo'>& Orders</span>
					</div>

					<div className='header__option'>
						<span className='header_optionLineOne'>Your</span>
						<span className='header_optionLineTwo'>Prime</span>
					</div>

					<Link to="/checkout">
						<div className='header__optionBasket'>
							<ShoppingBasketIcon/>
							<span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
						</div>
					</Link>
				</div>
			</Link>
		</div>
	)
}
export default Header