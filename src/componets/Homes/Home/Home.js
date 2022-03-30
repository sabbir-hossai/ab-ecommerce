import React from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigaion/Navigation';
import Products from '../Products/products/Products';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;