import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import ServicePage from './Pages/ServicePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import { init } from 'emailjs-com';
import Aos from 'aos';
import { useEffect } from 'react';
// synergenceconsultants@gmail.com
import ReactGA from 'react-ga';




function App() {
  useEffect(() => {
    init("user_VgTA2WoFU0I3dephNDYU0");

    // ReactGA.initialize('G-4MKZ1340P8');
    // ReactGA.pageview(window.location.pathname + window.location.search);
    // ReactGA.event({
    //   category: 'User',
    //   action: 'Sent message'
    // });
    Aos.init();
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/service" component={ServicePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
