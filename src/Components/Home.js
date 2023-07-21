import React from "react";

  const Home = () => {
    const imagePath = process.env.PUBLIC_URL + '/Images/circle-flags_olympics.svg';
    const Arow = process.env.PUBLIC_URL + '/Images/Arow.svg';
    const line = process.env.PUBLIC_URL + '/Images/line-1.svg';


  return (
    <div className="home-page">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="circle-flags" alt="Circle flags" src={imagePath} />
          <h1 className="welcome-to-the">
            <span className="text-wrapper">Welcome to the </span>
            <span className="span">ol</span>
            <span className="text-wrapper-2">y</span>
            <span className="text-wrapper">m</span>
            <span className="text-wrapper-3">p</span>
            <span className="text-wrapper-4">ic</span>
          </h1>
          <img className="line" alt="Line" src={line} />
          <div className="div">Who we are?</div>
          <p className="p">Where you want to go?</p>
          <p className="text-wrapper-5">
            Lorem ipsum dolor sit amet consectetur. Interdum viverra laoreet commodo vel lectus consequat odio lacus
            ipsum. Odio diam dictum sodales odio at tellus hendrerit non. Amet nunc nisl auctor urna tortor mollis. Sit
            sociis.
          </p>
          <div className="overlap">
            <div className="group">
              <div className="text-wrapper-6">Home</div>
              <p className="odio-diam-dictum"> Odio diam dictum sodales odio at tellus hendrerit non.</p>
              <div className="ic-outline-arrow-wrapper">
                <img className="ic-outline-arrow" alt="Ic outline arrow" src={Arow} />
              </div>
            </div>
          </div>
          <div className="group-wrapper">
            <div className="group">
              <div className="text-wrapper-6">Contact</div>
              <p className="odio-diam-dictum"> Odio diam dictum sodales odio at tellus hendrerit non.</p>
              <div className="ic-outline-arrow-wrapper">
                <img className="ic-outline-arrow" alt="Ic outline arrow" src={Arow}/>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="group">
              <div className="text-wrapper-6">About me</div>
              <p className="odio-diam-dictum"> Odio diam dictum sodales odio at tellus hendrerit non.</p>
              <div className="ic-outline-arrow-wrapper">
                <img className="ic-outline-arrow" alt="Ic outline arrow" src={Arow} />
              </div>
            </div>
          </div>
          <div className="overlap-2">
            <div className="group">
              <div className="text-wrapper-6">Navigation</div>
              <p className="odio-diam-dictum"> Odio diam dictum sodales odio at tellus hendrerit non.</p>
              <div className="ic-outline-arrow-wrapper">
                <img className="ic-outline-arrow" alt="Ic outline arrow" src={Arow}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
