import React from 'react';
import Slider from '../component/Slider';
import PopularSection from '../component/PopularSection';
import WhyAdopt from '../component/WhyAdopt'
import PetHeroes from '../component/PetHeroes';


const Home = () => {
    return (
        <div>
            <title>Home</title>
           <Slider/>
           <PopularSection/>
           <WhyAdopt/>
           <PetHeroes/>
        </div>
    );
};


export default Home;