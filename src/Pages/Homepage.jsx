import Banner from '../Components/Banner';
import DisplayCatagory from '../Components/DisplayCatagory';
import RecentIssues from '../Components/RecentIssues';
import CommunityStack from '../Components/CommunityStack';
import Volunteer from '../Components/Volunteer';
import { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import Loader from '../Components/Loader';


const Homepage = () => {
    const useaxios = useAxios()
    const [loader,setLoader] = useState(true);
    const [issues,setIssues] = useState([])

    useEffect(() => {

        useaxios.get('/recent-issues')
        .then(data => {
            setIssues(data.data)
            setLoader(false)
        })

    },[])

    if(loader){
        return <Loader></Loader>
    }

   
    return (
        <div>
             <Banner></Banner>
             <DisplayCatagory></DisplayCatagory>
             <RecentIssues issues={issues}></RecentIssues>
             <CommunityStack></CommunityStack>
             <Volunteer></Volunteer>
             
        </div>
        
    );
};

export default Homepage;