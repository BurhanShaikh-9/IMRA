import React, { useContext, useEffect, useState } from 'react'
import logoImg from '../../assets/images/logo/Logo.png'
import { SidebarContext } from '../../App'
import { NavLink, Link } from 'react-router-dom'
import { RxCross2, RxDashboard } from 'react-icons/rx';
import { HiOutlineUserGroup } from 'react-icons/hi'
import { HiOutlineClipboardDocument } from 'react-icons/hi2'
import { LiaUserSlashSolid } from 'react-icons/lia'
import { AiOutlineFolderAdd, AiOutlineUser } from 'react-icons/ai'
import { GiHospitalCross } from 'react-icons/gi'
import { RiHospitalLine } from 'react-icons/ri'
import { CgFileDocument } from 'react-icons/cg'
import { MdOutlineAdminPanelSettings, MdOutlineManageAccounts } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { FaUserNurse } from 'react-icons/fa'
import { FaUserDoctor } from "react-icons/fa6";
import { ROUTES } from '../../../utils/routes';
import TokenService from '../../services/tokenService';
import { AdminService } from '../../services/admin';

export const Sidebar = () => {


    const { sideBar, setSideBar } = useContext(SidebarContext)
    const closeButton = () => {
        setSideBar(!sideBar)
    }

    const { getUserCookie } = TokenService();
    const { getSingleAdmin } = AdminService();
    let userId = getUserCookie()
    const [userObject, setUserObject] = useState({});

    useEffect(() => {
        if (userId) {
            getSingleAdmin(userId).then((res) => {
                setUserObject(res?.data?.admin)
                // console.log(res?.data?.data, 'userrr');
            }).catch((err) => {
                console.log(err, 'err');
            })
        }
    }, [userId])

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

                        {userObject.addHospital == 1 &&

                            <li className="nav-item">
                                <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.ADD_HOSPITAL}>
                                    <RiHospitalLine className='sideIcon' /><span>Add Hospital</span>
                                </NavLink>
                            </li>
                        }
                        {userObject.manageHospital == 1 &&
                            <li className="nav-item">
                                <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.MANAGE_HOSPITAL}>
                                    <GiHospitalCross className='sideIcon' /><span>Manage Hospital</span>
                                </NavLink>
                            </li>
                        }
                        {userObject.manageUser == 1 &&
                            <li className="nav-item">
                                <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.MANAGE_USER}>
                                    <FiUsers className='sideIcon' /><span>Manage User </span>
                                </NavLink>
                            </li>
                        }
                        {
                            userObject.reception == 1 &&
                            <li className="nav-item">
                                <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.RECEPTIONIST}>
                                    <FaUserNurse className='sideIcon' /><span>Receptionist </span>
                                </NavLink>
                            </li>
                        }
                        {userObject.addAdmin == 1 &&
                            <li className="nav-item">
                                <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.ADD_ADMIN}>
                                    <MdOutlineManageAccounts className='sideIcon' /><span>Add Admin </span>
                                </NavLink>
                            </li>
                        }
                        {userObject.manageAdmin == 1 &&
                            <li className="nav-item">
                                <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.ADMIN_MANAGE}>
                                    <MdOutlineAdminPanelSettings className='sideIcon' /><span>Admin Management</span>
                                </NavLink>
                            </li>
                        }
                        {/* {userObject.services == 1 &&

                            <li className="nav-item">
                                <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.SERVICES}>
                                    <FiSettings className='sideIcon' /><span>Services</span>
                                </NavLink>
                            </li>
                        } */}
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.ADD_DOCTOR}>
                                <FaUserDoctor className='sideIcon' /><span>Add Doctor</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.MANAGE_DOCTOR}>
                                <FaUserDoctor className='sideIcon' /><span>Manage Doctor</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.PROFILE}>
                                <AiOutlineUser className='sideIcon' /><span>Profile</span>
                            </NavLink>
                        </li>
                        {userObject.services == 1 &&
                            <li className="nav-item">
                                <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.FAQS}>
                                    <CgFileDocument className='sideIcon' /> <span>Faqs</span>
                                </NavLink>
                            </li>
                        }

                    </ul>
                </div>
            </aside>
        </>
    )
}
