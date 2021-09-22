import { Link } from "react-router-dom";

const Result = () =>
{
    const localData = localStorage.getItem("user");
	const locatDataObject = JSON.parse(localData);
    const email = locatDataObject.email;
    console.log(locatDataObject);
    return (
			<div className="main-container">
				<div className="text">
					<br />
					<h3>Loggined Successfully!</h3>
					<Link to="/">Go back to Home page</Link>
				</div>
			</div>
		);
}

export default Result;