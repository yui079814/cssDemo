import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import Home from '../src/home/home.jsx'
import Demo1 from "../src/demo/demo1/demo1.jsx";
import Demo2 from '../src/demo/demo2/demo2.jsx'

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/demo1' component={Demo1}></Route>
				<Route path='/demo2' component={Demo2}></Route>
				<Route path='/' component={Home}></Route>
			</Switch>
		</Router>
	);
}

export default App;
