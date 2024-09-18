import React from 'react';
import Header from '../component/common/Header';
import MainSection from '../component/MainSection';
import ContentSection from '../component/ContentSection';
import Sidebar from '../component/common/Sidebar';
import AwardsSection from '../component/core/AwardsSection';
import VideoSection from '../component/common/VideoSection';
import VedicAstrology from '../component/core/VedicAstrology';
import ContactBanner from '../component/core/ContactBanner';
import Specialization from '../component/core/Specialization';
import ZodiacSlider from '../component/common/ZodiacSlider';
import CaseStudiesSection from '../component/core/CaseStudiesSection';
import TestimonialContact from '../component/core/TestimonialContact';

const Home = () => {
    const headerData = {
        title: "Renownedkit Sharma Ji - Globally Acclaimed for Exceptional Astrological Expertise",
        description: "As the accomplished son of a globally renowned figure, Ankit Sharma, a distinguished Indian astrologer, has risen to become one of the most sought-after and esteemed astrologers and vashik. Throughout his illustrious career spanning decades, he has skillfully applied his expertise in Vedic astrology and benevolent vashikaran to make a profound of life.",
    };

    const sidebarLinks = [
        { label: "Vashikaran Guru", url: "#" },
        { label: "Vashikaran Specialist India", url: "#" },
        { label: "Love Vashikaran for Him/Her", url: "#" },
        { label: "Love Back Specialist", url: "#" },
        { label: "Love Marriage Vashikaran", url: "#" },
        { label: "Vashikaran Mantra", url: "#" },
        { label: "Vashikaran Removal Specialist", url: "#" },
        { label: "Black Magic Removal Specialist", url: "#" },
        { label: "Powerful Vashikaran Specialist", url: "#" },
        { label: "Vashikaran Yantra", url: "#" },
        { label: "Vashikaran Success Rate", url: "#" },
        { label: "Vashikaran Success Stories", url: "#" },
    ];

    return (
        <>
        <div className="w-screen flex flex-col ">
            {/* Main Section */}
            <div className="w-full">
                <MainSection />
            </div>

            {/* Second Section */}
            <div className="w-full bg-white flex flex-col lg:flex-row lg:items-start lg:justify-between p-4 lg:p-6">
                <div className="flex-1 lg:mr-4 mb-6 lg:mb-0">
                    <Header title={headerData.title} description={headerData.description} />
                    <VideoSection videoUrl="https://www.youtube.com/watch?v=X0gfWK_9Nvo" />
                </div>
                <div className="w-full lg:w-1/3">
                    <Sidebar heading="POSITIVE VASHIKARAN" links={sidebarLinks} />
                </div>
            </div>

            {/* Third Section */}
            <div className="w-full px-4 lg:px-16 flex flex-col lg:flex-row bg-white">
                <div className="w-full lg:w-2/3">
                    <ContentSection />
                    <VideoSection videoUrl="https://www.youtube.com/watch?v=X0gfWK_9Nvo" />
                </div>
                <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                    <Sidebar heading="POSITIVE VASHIKARAN" links={sidebarLinks} />
                </div>
            </div>

            {/* Fourth Section */}
            <div className="w-full px-4 lg:px-16 flex flex-col lg:flex-row bg-white">
                <div className="w-full lg:w-2/3">
                    <VedicAstrology />
                </div>
                <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                    <Sidebar heading="POSITIVE VASHIKARAN" links={sidebarLinks} />
                </div>
            </div>

            {/* Additional Sections */}
            <div className="w-full">
                <ContactBanner />
                <Specialization />
            </div>
            
            {/* Zodiac Slider Section */}
            <div className="bg-pink-50 w-full py-6">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6">वार्षिक राशिफल</h2>
                    <ZodiacSlider />
                </div>
            </div>

            {/* Awards Section */}
            <AwardsSection title="AWARD AND ACHIEVEMENTS" />
            <CaseStudiesSection />
            <TestimonialContact />
        </div>

        </>
    );
};

export default Home;
