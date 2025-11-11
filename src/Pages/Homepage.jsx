import React from 'react';
import Banner from '../Components/Banner';
import DisplayCatagory from '../Components/DisplayCatagory';
import RecentIssues from '../Components/RecentIssues';

 const issuesPromise = fetch('http://localhost:3000/recent-issues').then(res => res.json())

const Homepage = () => {

    
    return (
        <div>
             <Banner></Banner>
             <DisplayCatagory></DisplayCatagory>
             <RecentIssues issuesPromise={issuesPromise}></RecentIssues>
        </div>
    );
};

export default Homepage;