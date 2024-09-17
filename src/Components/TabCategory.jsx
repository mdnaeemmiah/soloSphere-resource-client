import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';


const TabCategory = ({ jobs }) => {


    return (
        <Tabs>
            <div className='container px-6 mx-auto py-10'>
                <h1 className='text-2xl text-center capitalize lg:text-3xl font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                <p className='max-w-3xl mx-auto my-6 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui autem porro itaque praesentium error consectetur, perferendis unde eos maxime.</p>
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>

                    <div className='grid grid-cols-1 mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs
                                .filter(j => j.category === 'Web Development')
                                .map(job => <JobCard
                                    key={job._id}
                                    job={job}
                                ></JobCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs
                                .filter(j => j.category === 'Graphics Design')
                                .map(job => <JobCard
                                    key={job._id}
                                    job={job}
                                ></JobCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs
                                .filter(j => j.category === 'Digital Marketing')
                                .map(job => <JobCard
                                    key={job._id}
                                    job={job}
                                ></JobCard>)
                        }
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabCategory;