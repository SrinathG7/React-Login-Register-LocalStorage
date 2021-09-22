
import React, { useState } from "react";

import { useHistory } from "react-router";
import "./Login.css";
import { Checkbox, Switch, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const Login = () =>
{
	let History = useHistory();
	const [error, setError] = useState('0');

	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');

	const emailChangeHandler = (event) =>
	{
		setEnteredEmail(event.target.value)
	}
	const passwordChangeHandler = (event) =>
	{
		setEnteredPassword(event.target.value);
	}



	const submitHandler = (event) =>
	{
		event.preventDefault();
		var localData = localStorage.getItem('user');
		const locatDataObject = JSON.parse(localData);
		var id = 0;
		var results=0;
		
		
		
		locatDataObject.map(userData => 
		{
			console.log("okok");
			console.log(userData.email);
			
			if(enteredEmail == userData.email)
			{
				id=userData.id;
				results++;
			}
			if(enteredPassword == userData.password && userData.id == id)
			{
				results++;
			}
			
		}
		
		)
		if(results==2)
		{
			
			History.push("/Logged in Successfully");
		} 
		else{
			setError(1);
		}
		
		

	}
    return (
			<div>
				<div className="main-container">
					<p className="link">
						<Link to="/info">list of people registerd</Link>
					</p>
					<div className="content">
						<div className="text">
							<h3>Welcome back!</h3>
							<small>Please login into your account</small>
						</div>
						<div className="InputForm">
							<form onSubmit={submitHandler}>
								<TextField
									label="E-Mail"
									value={enteredEmail}
									onChange={emailChangeHandler}
									fullWidth="true"
									size="medium"
								/>
								<br />
								<TextField
									label="Password"
									type="password"
									value={enteredPassword}
									onChange={passwordChangeHandler}
									fullWidth="true"
									size="large"
								/>{" "}
								<br />
								<br />
								<div className="check-box remember">
									<input type="checkbox" />
									Remember me
								</div>
								<div className="forget">
									<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
										forget password
									</a>
								</div>
								<button type="submit" className=" button">
									Login
								</button>
							</form>
						</div>
						<Link to="/Register">
							Not have a accout?, then why not register
						</Link>
					</div>
				</div>
			</div>
		);
}

export default Login;