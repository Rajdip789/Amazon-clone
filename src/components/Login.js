import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase";
import './Login.css'

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = e => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.log(userCredential);
			if(userCredential) {
				navigate('/');
			}
		})
		.catch(error => alert(error.message))
	}

	const register = e => {
		e.preventDefault();

		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.log(userCredential);
			if(userCredential) {
				navigate('/');
			}
		})
		.catch(error => alert(error.message))
	}

	return (
		<div className='login'>
			<Link to='/'>
				<img className='login__logo' src='./images/amazon_logo_dark.png'/>
			</Link>

			<div className='login__container'>
				<h1>Sign in</h1>

				<form>
					<h5>E-mail</h5>
					<input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

					<h5>password</h5>
					<input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

					<button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
				</form>
				<p>By continuing, you agree to Amazon's <small>Conditions of Use</small> and <small>Privacy Notice</small>.</p>
			</div>

			<div className='login__footer'>
				<div className='divider__break'>
					<p>New to Amazon?</p>
				</div>
				<button type='submit' className='login__registerButton' onClick={register}>Create your Amazon account</button>
				<div className='login__terms'><p>Coditions of Use</p><p>Privacy Notice</p> <p>Help</p></div>
				<p className='login__rights'>@1996-2022, Amazon.com, Inc. or its affiliates</p>
			</div>
		</div>
	)
}

export default Login