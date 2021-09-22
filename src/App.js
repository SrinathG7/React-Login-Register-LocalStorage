import Login from "./Components/Login/Login";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import RegCompleted from "./Components/Registration/RegComplted";
import DataHandler from "./Components/DataHandler/DataHandler";
import Result from "./Components/Result page/Result";
import Info from "./Components/Info/Info";

function App() {
  return (
		<Router>
			<div className="row1">
				<div className="column1 img">
					
				</div>

				<div className="column1">
					<Switch>
						<Route exact path="/">
							<Login />
						</Route>
						<Route path="/Register">
							<DataHandler />
						</Route>
						<Route path="/Registration Complete">
							<RegCompleted />
						</Route>
						<Route path="/Logged in Successfully">
							<Result />
						</Route>
						<Route path="/info">
							<Info />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
  );
}

export default App;
