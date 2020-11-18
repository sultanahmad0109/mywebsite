import React from 'react';
import Home from './Home';
import { Redirect, Route, Switch } from 'react-router-dom';
import Learning from './Learning';
import About from './About';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


const App = () => {
    return (<>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/learning" component={Learning} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
        </Switch>
        <Footer />
    </>);
}
export default App;