import React from 'react';
import'./style.css';
import Latest from './homeComponents/Latest';
import Card from '../../components/UI/Card';
import Treanding from './homeComponents/Treanding';
import LatestArtical from './homeComponents/LatesatArtical';
import LatestStoies from './homeComponents/LatestStories';


const Home = (props) => {
  return(
    
    <div>
      <Card>
        <Treanding/>
      </Card>
      <Card>
          <Latest/>
      </Card>
      <Card>
        <LatestArtical/>
      </Card>
      <Card>
        <LatestStoies/>
      </Card>
   
    </div>
   )

 }

export default Home;