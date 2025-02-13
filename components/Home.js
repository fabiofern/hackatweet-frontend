import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import Tweets from "./Tweet"
import {useRouter} from "next/router" 

import Link from 'next/link';// créer un lien vers une autre page ou autre components

function Home() {
	// Modales
	const [isSignUpOpen, setIsSignUpOpen] = useState(false);
	const [isSignInOpen, setIsSignInOpen] = useState(false);
	// sign UP
	const [signUpFirstname, setSignUpFirstname] = useState("");
	const [signUpUsername, setSignUpUsername] = useState("");
	const [signUpPassword, setSignUpPassword] = useState("");
	// sign IN
	const [signInUsername, setSignInUsername] = useState("");
	const [signInPassword, setSignInPassword] = useState("");
	// Gère la redirection
	const router = useRouter(); 

	// ✅ Ouvrir / fermer les modales
	const openSignUp = () => setIsSignUpOpen(true);
	const closeSignUp = () => setIsSignUpOpen(false);
	const openSignIn = () => setIsSignInOpen(true);
	const closeSignIn = () => setIsSignInOpen(false);
  
	// ✅ Gérer l'inscription (Sign Up)

	const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstname,username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data) {
					console.log(data)
					router.push("./allTweets")
				} else { console.log('nul')}
			});
	};
  
	// ✅ Gérer la connexion (Sign In)
	const handleConnection = () => {

		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					router.push("./allTweets")
				} else { alert("NAHHHHHHH")}
			});
	};
  
  
return (
  <div className={styles.boby}>
	<div className={styles.bgImage}>
	  <img src="/favicon.ico" alt="image de fond ciel" className={styles.piupiu} />
	</div>

	<div className={styles.bgRight}>
	  <div className={styles.signIn}>
		<h1>See what's happening</h1>
		<h4>Join Hackatweet today.</h4>
		<button className={styles.buttonSign} onClick={openSignUp}>
		  Sign up
		</button>
		<h6>Already have an account?</h6>
		<button className={styles.buttonSign} onClick={openSignIn}>
		  Sign In
		</button>
	  </div>
	</div>

	{/* Modale Sign Up */}
	{isSignUpOpen && (
	  <div className={styles.modalOverlay} onClick={closeSignUp}>
		<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
		<img src="/favicon.ico" alt="image de fond ciel" className={styles.piupiuModale} />
		  <h2>Create your Hackatweet account</h2>
		  <input type="text" placeholder="Firstname" className={styles.input} onChange={(e) => setSignUpFirstname(e.target.value)} />
		  <input type="text" placeholder="Username" className={styles.input} onChange={(e) => setSignUpUsername(e.target.value)}/>
		  <input type="password" placeholder="Password" className={styles.input} onChange={(e) => setSignUpPassword(e.target.value)}/>
		  {/* clic pour signUp */}
		  <button className={styles.buttonModal} onClick={()=> handleRegister()} >Sign Up</button>
		  <button className={styles.closeButton} onClick={closeSignUp}>
			✖
		  </button>
		</div>
	  </div>
	)}

	{/* Modale Sign In */}
	{isSignInOpen && (
	  <div className={styles.modalOverlay} onClick={closeSignIn}>
		<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
		<img src="/favicon.ico" alt="image de fond ciel" className={styles.piupiuModale} />
		  <h2>Connect to Hackatweet</h2>
		  <input type="text" placeholder="Username" className={styles.input} onChange={(e) =>setSignInUsername(e.target.value) } />
		  <input type="password" placeholder="Password" className={styles.input} onChange={(e) =>setSignInPassword(e.target.value) }/>
		  {/* clic pour signIn */}
		  <button className={styles.buttonModal} onClick={()=> handleConnection()} >Sign In</button>
		  <button className={styles.closeButton} onClick={closeSignIn}>
			✖
		  </button>
		</div>
	  </div>
	)}
  </div>
);
}


export default Home;
