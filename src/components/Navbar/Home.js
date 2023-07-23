import React from 'react';
import './Home.css'
import Navbar from './Navbar';
import './Navbar.css'

const Home = () => {
  const backgroundImage= process.env.PUBLIC_URL + "/Images/img/Home page Olympic_Background.JPG"
  const PAris= process.env.PUBLIC_URL + "/Images/img/image of 2024box.PNG"
  return (
    <div>
      <div className='page'>
        <img src={backgroundImage} alt='background' className='Background'></img>
       <Navbar/>
       <div className='heading'>WELCOME TO THE OLYMPIC</div>
       <div className='paragraph'>"Welcome to the offical olympic games websites,  where passion perseverance,  and excellence unite in the pursuit of sporting glory. "</div>
       <img src={PAris} alt='paris' className='parisImage'/>
       <div className='JULY-AUGUST'> 26 JULY-11AUGUST</div>
       <div className='PARIS-TEXT'>PARIS 2024</div>
   
   </div>
     
    </div>
  );
};

export default Home;