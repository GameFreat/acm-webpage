import React, { useState } from "react";
import "./output.css";
import logo from "./component/images/logo.png";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import MainPage from "./component/Contents";
import { AnimatePresence } from "framer-motion";
import ThankYou from "./component/thanks";
import People from "./component/people";
import Events from "./component/event";
import Footer from "./component/footer";
import Registration from "./component/registration";

const pageVariation = {
  inThank: { opacity: 1, x: 0 },

  outThank: { opacity: 0, x: "-100vw" },
};

export default function App() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(window.innerWidth <= 640 ? false : true);

  return (
    <div className="flex flex-col h-screen justify-between">
      <nav
        style={{ zIndex: 1000 }}
        className="flex items-center justify-between flex-wrap bg-gray-100 text-blue-600 p-2 lg:sticky lg:w-full lg:top-0 "
      >
        <NavLink to="/">
          <div className="flex items-center flex-shrink-0 mr-6">
            <img className="h-16 w-16 mx-4 mt-4" src={logo} alt="logo" />
          </div>
        </NavLink>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-blue-600 hover:border-grey-100">
            <svg
              onClick={() => setIsOpen(!isOpen)}
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {isOpen ? (
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <NavLink
                to="/event"
                className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800"
              >
                Events
              </NavLink>
              <NavLink
                to="/registration"
                className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800"
              >
                Membership
              </NavLink>
              <NavLink
                to="/people"
                className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800"
              >
                People
              </NavLink>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
      <div className="">
        <div
          className=" md:mt-18 h-full"
          style={{ overflowX: "hidden", overflowY: "hidden" }}
        >
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/">
                <MainPage pageVariation={pageVariation} />
              </Route>
              <Route path="/event">
                <Events pageVariation={pageVariation} />
              </Route>
              <Route path="/people">
                <People pageVariation={pageVariation} />
              </Route>
              <Route path="/registration">
                <Registration pageVariation={pageVariation} />
              </Route>
              <Route path="/thank">
                <ThankYou pageVariation={pageVariation} />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      </div>
      <Footer pageVariation={pageVariation} />
    </div>
  );
}
