import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import Home from './home/home.jsx'
import Demo1 from "./demo/demo1/demo1.jsx";
import Demo2 from './demo/demo2/demo2.jsx';
import Demo3 from "./demo/demo3/demo3";
import Demo4 from "./demo/demo4/demo4";
import Demo5 from "./demo/demo5/demo5";
import Demo6 from "./demo/demo6/demo6";

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/demo1' component={Demo1}></Route>
				<Route path='/demo2' component={Demo2}></Route>
				<Route path='/demo3' component={Demo3}></Route>
				<Route path='/demo4' component={Demo4}></Route>
				<Route path='/demo5' component={Demo5}></Route>
				<Route path='/demo6' component={Demo6}></Route>
				<Route path='/' component={Home}></Route>
			</Switch>
		</Router>
	);
}

export default App;
