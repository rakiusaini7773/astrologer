import React from 'react';
import VideoSection from '../component/common/VideoSection';
import Sidebar from '../component/common/Sidebar';

const MainContent = ({ videoData, sidebarLinks }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Video Section */}
      <VideoSection videoUrl={videoData.videoUrl} videoTitle={videoData.videoTitle} />

      {/* Sidebar */}
      <Sidebar heading="POSITIVE VASHIKARAN" links={sidebarLinks} />
    </div>
  );
};

export default MainContent;


