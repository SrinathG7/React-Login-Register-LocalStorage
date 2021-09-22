import { Link } from "react-router-dom";

const RegCompleted = () =>
{
    return (
			<div className="main-container">
				<div className="text">
					<h3>
						You Had successfully registered, now go back to login page
					</h3>
					<br />
					<Link to="/"> Go back to Home page</Link>
				</div>
			</div>
		);
}

export default RegCompleted;