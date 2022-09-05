import React from "react";
import HomeContent from "./HomeContent/HomeContent";
import HomeFooter from "./HomeFooter";
import Nav from "./Nav"

const Home = props => {

    return <>
        <Nav />
        <HomeContent/>
        <HomeFooter/>
    </>

}

export default Home;