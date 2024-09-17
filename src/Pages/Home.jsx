

import { useLoaderData } from 'react-router-dom';
import Carousel from '../Components/Carousel';
import TabCategory from '../Components/TabCategory';

const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    return (
        <div>
            <Carousel></Carousel>
            <TabCategory jobs={jobs}></TabCategory>
        </div>
    );
};

export default Home;