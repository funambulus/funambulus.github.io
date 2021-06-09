import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import ServicePage from './Pages/ServicePage';
import {
  Switch,
  Route
} from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import { init } from 'emailjs-com';
import { Fragment, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    init("user_VgTA2WoFU0I3dephNDYU0");
    Aos.init({
      once: true,
      easing: 'ease-in-out-back',
      delay: 100,
      debounceDelay: 150,
    });
  }, []);

  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Header selected="home" />
          <HomePage />
        </Route>
        <Route exact path="/service" >
          <Header selected="service" />
          <ServicePage />
        </Route>
        <Route exact path="/about" >
          <Header selected="about" />
          <AboutPage />
        </Route>
        <Route exact path="/contact">
          <Header selected="contact" />
          <ContactPage />
        </Route>
        <Route exact>
          <Header />
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
