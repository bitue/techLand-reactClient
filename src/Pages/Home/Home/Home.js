import React from 'react';
import Footer from '../../Shared/Footer/Footer';

import Nav from '../../Shared/Nav/Nav';
import Faq from '../Faq/Faq';
import HomeApartment from '../HomeApartment/HomeApartment';
import HomeBanner from '../HomeBanner/HomeBanner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <HomeBanner></HomeBanner>
            <HomeApartment></HomeApartment>
            <Reviews></Reviews>
            <Faq></Faq>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;