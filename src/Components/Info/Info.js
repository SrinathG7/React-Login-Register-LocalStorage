import { Link } from "react-router-dom";


const Info = () => {
	const localData = localStorage.getItem("user");
	const localDataObject = JSON.parse(localData);
    
    var user;
    
	return (
		<div className="main-container">
			<div className="text">
				<h3>Pepole Registered</h3>
				{
                 user = localDataObject.map(function(element){
                    return `${element.email}  `;
})
                }
				<br />
				<p className="down">
					<Link to="/"> Go back to Home page</Link>
				</p>
			</div>
		</div>
	);
};

export default Info;
