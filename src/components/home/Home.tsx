import React from 'react';
import "./home.css";
import Data from "./Data";

const Home = () => {
  return (
    <section className="home__section" id="home">
        <div className="home__container">
            <div className="home__content">
                <Data/>
                <div className="home__img"></div>
            </div>
        </div>
    </section>
  )
}

export default Home;