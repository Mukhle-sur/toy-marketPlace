import React from 'react';
import Banner from '../../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import HappyClients from '../../HappyClients/HappyClients';
import useTitle from '../../../hooks/useTitle';
import OurFeature from '../../OurFeature/OurFeature';



const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <HappyClients></HappyClients>
            <OurFeature></OurFeature>
        </div>
    );
};

export default Home;