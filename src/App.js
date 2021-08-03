import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Switch, Route } from "react-router-dom";
import { init } from "emailjs-com";
import { Fragment, useEffect, lazy, Suspense } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = lazy(() => import("./Pages/HomePage"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const ServicePage = lazy(() => import("./Pages/ServicePage"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Header = lazy(() => import("./Component/Header"));
const Footer = lazy(() => import("./Component/Footer"));

function App() {
  useEffect(() => {
    init("user_VgTA2WoFU0I3dephNDYU0");
    Aos.init({
      once: true,
      easing: "ease-in-out-back",
      delay: 100,
      debounceDelay: 150,
    });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Fragment>
        <Switch>
          <Route exact path="/">
            <Header selected="home" />
            <HomePage />
          </Route>
          <Route exact path="/service">
            <Header selected="service" />
            <ServicePage />
          </Route>
          <Route exact path="/about">
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
    </Suspense>
  );
}

export default App;
