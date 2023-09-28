import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import { Dashboard } from '../Website/pages/Dashboard/dashboard'
// import { ManageUser } from '../Website/pages/Users/manageUser'
// import { ManageReportedUser } from '../Website/pages/ReportedUser/manageReportedUser'
// import { AddTopics } from '../Website/pages/Topics/addTopics'
// import { ManageTopics } from '../Website/pages/Topics/manageTopics'
import { Services } from '../Website/pages/Services/services'
import { Profile } from '../Website/pages/UserProfile.jsx/profile'
import { Faqs } from '../Website/pages/Polices/faqs'
import { AdminManagement } from '../Website/pages/Admin/adminManagement'
import { Layout } from '../Website/layout'
import { AddAdmin } from '../Website/pages/Admin/addAdmin'
// import { UpdateTopics } from '../Website/pages/Topics/updateTopic'
import { UpdateAdmin } from '../Website/pages/Admin/updateAdmin'
import { AddHospital } from '../Website/pages/Hospital/addHospital'
import { HospitalManage } from '../Website/pages/Hospital/hospitalManage'
import { UserManage } from '../Website/pages/User/userManage'
import TokenService from '../services/tokenService'
import { AdminService } from '../services/admin'
import { UpdateHospital } from '../Website/pages/Hospital/updateHospital'
import { Receptionist } from '../Website/pages/receptionist/receptionist'
import { AddDoctor } from '../Website/pages/Doctor/addDoctor'
import { DoctorManage } from '../Website/pages/Doctor/manageDoctor'
import { UpdateDoctor } from '../Website/pages/Doctor/updateDoctor'
// import { Login } from '../Website/pages/registration/login'

export const ExternalRoutes = () => {

    const { getUserCookie } = TokenService();
    const { getSingleAdmin } = AdminService();
    let userId = getUserCookie()
    const [userObject, setUserObject] = useState({});

    useEffect(() => {
        if (userId) {
            getSingleAdmin(userId).then((res) => {
                setUserObject(res?.data?.data)
            }).catch((err) => {
                console.log(err, 'err');
            })
        }
    }, [userId])

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                {
                    userObject.addHospital == 1 &&
                    <Route path={ROUTES.ADD_HOSPITAL} element={<AddHospital />} />
                }
                {
                    userObject.manageAdmin == 1 &&
                    <React.Fragment>
                        <Route path={`${ROUTES.UPDATE_ADMIN}/:adminId`} element={<UpdateAdmin />} />
                        <Route path={ROUTES.ADMIN_MANAGE} element={<AdminManagement />} />
                    </React.Fragment>
                }
                {
                    userObject.addAdmin == 1 &&
                    <Route path={ROUTES.ADD_ADMIN} element={<AddAdmin />} />
                }
                {
                    userObject.manageHospital == 1 &&
                    <React.Fragment>
                        <Route path={ROUTES.MANAGE_HOSPITAL} element={<HospitalManage />} />
                        <Route path={`${ROUTES.UPDATE_HOSPITAL}/:hospitalId`} element={<UpdateHospital />} />
                    </React.Fragment>
                }
                {
                    userObject.services == 1 &&
                    <Route path={ROUTES.SERVICES} element={<Services />} />
                }
                {
                    userObject.reception == 1 &&
                    <Route path={ROUTES.RECEPTIONIST} element={<Receptionist />} />
                }
                {
                    userObject.manageUser == 1 &&
                    <Route path={ROUTES.MANAGE_USER} element={<UserManage />} />
                }
                <Route path={ROUTES.ADD_DOCTOR} element={<AddDoctor />} />
                <Route path={ROUTES.MANAGE_DOCTOR} element={<DoctorManage />} />
                <Route path={`${ROUTES.UPDATE_DOCTOR}/:doctorId`} element={<UpdateDoctor />} />
                <Route path={ROUTES.PROFILE} element={<Profile />} />
                <Route path={ROUTES.FAQS} element={<Faqs />} />
            </Route>



        </Routes>
    )
}
