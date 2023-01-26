import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here 
import PersonalPortfolio from "./pages/PersonalPortfolio";
import PortfolioDetails from "./pages/PortfolioDetails";

// Import Css Here 
import './assets/scss/style.scss';
import './app.css'


const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    <Route path={`${process.env.REACT_APP_PUBLIC_URL + "/"}`} exact component={PersonalPortfolio} />
                    <Route path={`${process.env.REACT_APP_PUBLIC_URL + "/portfolio-details/:id "}`} exact component={PortfolioDetails} />
                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App
