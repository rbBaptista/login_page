import "./SignUP.css";
import {FaUser, FaLock} from "react-icons/fa";
import {useState} from "react";


const SignUP = () => {
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("ola");
		console.log(password);
		console.log(email);
		console.log(password);
		console.log(email);
	};
	
	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<h1>Login:</h1>
				<div className="input-field">
					<input placeholder="Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
					<FaUser className="icon"/>
				</div>
				<div className="input-field">
					<input placeholder="Password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
					<FaLock className="icon"/>
				</div>
				<div className="recall-forget">
					<label>
						<input type="checkbox"/>
						Lembrar de mim!
					</label>
					<a href="#">Recuperar senha</a>
				</div>
				<button type="submit">Sign Up</button>
				<div className="create-account">
					<a href="#">Criar conta</a>
				</div>
			</form>
		</div>
	);
};


export default SignUP;



