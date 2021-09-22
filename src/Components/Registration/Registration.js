import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./Registration.css";
import { useHistory } from "react-router";


const Registration = (props) =>
{
	
	let History = useHistory();
	const [error, setError] = useState(0);
	const [enteredName, setEnteredName] = useState('');
	const [enteredNumber, setEnteredNumber] = useState("");
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");
	


	const nameChangeHandler = (event) =>
	{
		setEnteredName(event.target.value);
	}
	const numberChangeHandler = (event) =>
	{
		setEnteredNumber(event.target.value);
	}
	const emailChangeHandler = (event) =>
	{
		setEnteredEmail(event.target.value);
	}
	const passwordChangeHandler = (event) =>
	{
		setEnteredPassword(event.target.value);
	}
	


    const submitHandler = (event) =>
    {
		var errorFlag = 0;
		event.preventDefault();
		
		const validEmail = new RegExp(
			/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/
		);
		const validPassword = new RegExp(
			/([^A-Za-z].{7})|(.[^A-Za-z].{6})|(.{2}[^A-Za-z].{5})|(.{3}[^A-Za-z].{4})|(.{4}[^A-Za-z].{3})|(.{5}[^A-Za-z].{2})|(.{6}[^A-Za-z].)|(.{7}[^A-Za-z])/
		);
		const validName = new RegExp(/^[a-zA-Z\s]*$/);
		const validNumber = new RegExp("^[0-9]{10}$");

		if (!validEmail.test(enteredEmail)) {
			alert("Invalid e-mail address");
			errorFlag++;
		} 
		if (!validPassword.test(enteredPassword)) {
			alert("Weak password");
			errorFlag++;
		} 
		if (!validName.test(enteredName)) {
			alert("Invalid Name");
			errorFlag++;
		} 
		if (!validNumber.test(enteredNumber)) {
			alert("Invalid number");	
			errorFlag++;
		}
		
		if(errorFlag==0)
		{
			
			History.push("/Registration Complete");

			
			

			const PersonalInfo = {
				name: enteredName,
				number: enteredNumber,
				email: enteredEmail,
				password: enteredPassword,
				id: Math.floor(Math.random()*101),
			};
			props.OnSaveInfo(PersonalInfo);
		}
		
		
    }
    return (
			<div className="main-container">
				<div className="text">
					<h3>Register</h3>
				</div>
				<form onSubmit={submitHandler} className="formReg">
					<TextField
						label="Name"
						className="name"
						fullWidth="true"
						value={enteredName}
						onChange={nameChangeHandler}
					/>
					<br />
					<TextField
						label="Mobile Number"
						type="number"
						className="number"
						value={enteredNumber}
						fullWidth="true"
						onChange={numberChangeHandler}
					/>
					<br />
					<TextField
						fullWidth="true"
						label="E-Mail ID"
						type="email"
						className="email"
						value={enteredEmail}
						onChange={emailChangeHandler}
					/>
					<br />
					<TextField
						fullWidth="true"
						label="Password"
						type="password"
						className="password"
						value={enteredPassword}
						onChange={passwordChangeHandler}
					/>
					<br />
					<button type="submit" className="button">
						SUBMIT
					</button>
				</form>
				<br />
				<br />
				<Link to="/"> Go back to Login page</Link>
			</div>
		);

}

export default Registration;