import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Navbaritem } from './Navbaritem';
import { LiaBarsSolid } from "react-icons/lia";

const Navbar = () => {
  const NavbarLogo = process.env.PUBLIC_URL + "/Images/img/logo-color-1.svg"
  return (
    <div>
      <div className='Bckgroundimage'>
        <nav className="navbar">
        <img className="logo-color" alt="Logo color" src={NavbarLogo} />
          <div className="left-section">
            {Navbaritem.map((item, i) => {
                    return (
                        <div key={i} className={item.cName}>
                            <Link to={item.url}>
                              {item.title}
                            </Link>
                        </div>
                       
                    )
                })}
          </div>
          <LiaBarsSolid className='menu-icon'/>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;