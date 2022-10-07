import React, { useEffect } from 'react'
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		//only run when the app component loades...
		onAuthStateChanged(auth, (user) => {
			console.log(user);
			if(user) {
				//User logged in
				dispatch({
					type: 'SET_USER',
					user //user : user
				})
			} else {
				//user is logged out
				dispatch({
					type: 'SET_USER',
					user //user : user
				})
			}
		})
	}, [])

	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route exact path='/login' element={<Login/>}>
					</Route>
					<Route exact path='/' element={<><Header/><Home/></>}>
					</Route>
					<Route exact path='/checkout' element={<><Header/><Checkout/></>}>
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}
        
export default App;
    