import React, { useContext, useEffect, useState } from 'react'
import logoImg from '../../assets/images/logo/Logo.png'
import { SidebarContext } from '../../App'
import { NavLink, Link } from 'react-router-dom'
import { RxCross2, RxDashboard } from 'react-icons/rx';
import { HiOutlineUserGroup  } from 'react-icons/hi'
import {HiOutlineClipboardDocument} from 'react-icons/hi2'
import { LiaUserSlashSolid } from 'react-icons/lia'
import {AiOutlineFolderAdd , AiOutlineUser} from 'react-icons/ai'
import {GiHospitalCross} from 'react-icons/gi'
import {RiHospitalLine} from 'react-icons/ri'
import {CgFileDocument} from 'react-icons/cg'
import {MdOutlineAdminPanelSettings, MdOutlineManageAccounts} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'

import {FiSettings } from 'react-icons/fi'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { ROUTES } from '../../../utils/routes';

export const Sidebar = () => {


    const { sideBar, setSideBar } = useContext(SidebarContext)

    const closeButton = () => {
        setSideBar(!sideBar)
    }

    return (
        <>
            <aside id="sidebar" className={sideBar ? 'sidebarwidth' : 'sidebar'}>
                <div className="sideBarInner">
                    <div className='aSideCloseButton'>
                        <button onClick={closeButton}><RxCross2 /></button>
                    </div>
                    <div className="LogoImage">
                        <Link to="" >
                            <img src={logoImg} alt="" />
                        </Link >
                    </div>

                    <ul className="sidebar-nav" id="sidebar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.DASHBOARD}>
                                <RxDashboard className='sideIcon' /><span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.ADD_HOSPITAL}>
                                <RiHospitalLine className='sideIcon' /><span>Add Hospital</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.MANAGE_HOSPITAL}>
                                <GiHospitalCross className='sideIcon' /><span>Manage Hospital</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.MANAGE_USER}>
                                <FiUsers className='sideIcon'/><span>Manage User </span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.ADD_ADMIN}>
                                <MdOutlineManageAccounts className='sideIcon'/><span>Add Admin </span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.ADMIN_MANAGE}>
                                <MdOutlineAdminPanelSettings className='sideIcon'/><span>Admin Management</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.SERVICES}>
                                <FiSettings className='sideIcon'/><span>Services</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.PROFILE}>
                              <AiOutlineUser className='sideIcon'/><span>Profile</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.FAQS}>
                                <CgFileDocument className='sideIcon'/> <span>Faqs</span>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </aside>
        </>
    )
}
