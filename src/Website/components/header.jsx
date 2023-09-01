import React, { useContext, useState } from 'react'
import ProfileImg from '../../assets/images/guy.png'
import { SidebarContext } from '../../App'
import { Link, useNavigate } from 'react-router-dom'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoBell } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { ROUTES } from '../../../utils/routes';
// import AuthService from '../../----services/auth.service';


export const Header = (props) => {
  const navigate = useNavigate();

    const { sideBar, setSideBar } = useContext(SidebarContext)
    // const {userLogout } = AuthService();

    return (
        <React.Fragment>
            <header>
        <div className="headerInner">
          <button className="menuButton" onClick={() => setSideBar(!sideBar)}>
           <RxHamburgerMenu/>
          </button>
          <div className="navRight">
            {/* <div className="dropdown notificationDropDown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <GoBell/>
                <div className="notificationShow">
                </div>
              </button>
              <ul className="dropdown-menu notificationMenu">
                <li className=''><a className="dropdown-item " href="#">
                  <div className='notificationItem'>
                    <p className='notificationHeading'>Heading</p>
                    <p className='notificationMessage'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ducimus.</p>
                  </div>
                </a></li>
                <li><a className="dropdown-item" href="#">
                  <div className='notificationItem'>
                    <p className='notificationHeading'>Heading</p>
                    <p className='notificationMessage'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ducimus.</p>
                  </div>
                </a></li>
                <li><a className="dropdown-item" href="#">
                  <div className='notificationItem'>
                    <p className='notificationHeading'>Heading</p>
                    <p className='notificationMessage'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ducimus.</p>
                  </div>
                </a></li>
              </ul>
            </div>

            <div className="dropdown notificationDropDown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <AiOutlineMail/>
                <div className="notificationShow">
                </div>
              </button>
              <ul className="dropdown-menu notificationMenu">
                <li className=''><a className="dropdown-item " href="#">
                  <div className='notificationItem'>
                    <p className='notificationHeading'>Heading</p>
                    <p className='notificationMessage'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ducimus.</p>
                  </div>
                </a></li>
                <li><a className="dropdown-item" href="#">
                  <div className='notificationItem'>
                    <p className='notificationHeading'>Heading</p>
                    <p className='notificationMessage'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ducimus.</p>
                  </div>
                </a></li>
                <li><a className="dropdown-item" href="#">
                  <div className='notificationItem'>
                    <p className='notificationHeading'>Heading</p>
                    <p className='notificationMessage'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ducimus.</p>
                  </div>
                </a></li>
              </ul>
            </div> */}

            <div className="aboutDoctor">
              <p className="doctorName">Admin Name</p>
              <p className="doctorSpeciality">Super Admin</p>
            </div>
            <div className="dropdown profileDropDown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={ProfileImg} alt="" />
                <div className="notificationShow"></div>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" onClick={()=>{navigate(ROUTES.PROFILE)}}>
                    <i className="bi bi-person" />
                    Profile
                  </button>
                </li>
                <li >
                  <button className="dropdown-item" href="#">
                    <i className="bi bi-box-arrow-in-left" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

        </React.Fragment>
    )
}
