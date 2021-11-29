import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


//Pages
import Home from './pages/Home';
//import Features from './pages/Features';
import { AccountBox } from "./components/Login/accountBox";
import Pricing from './pages/PricingPage';
import Footer from './components/Footer/Footer';
import Services from './Services/Services';




function App() {
	return (
		<Router>



		
			<GlobalStyle />
			<Navbar />
			
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/pricing" exact component={Pricing} />
				<Route path="/services" exact component={Services} />
				<Route path="/login" exact component={AccountBox} />
				
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
