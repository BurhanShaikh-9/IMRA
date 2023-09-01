import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import { Dashboard } from '../Website/pages/Dashboard/dashboard'
import { ManageUser } from '../Website/pages/Users/manageUser'
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
// import { Login } from '../Website/pages/registration/login'

export const ExternalRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                {/* <Route path={ROUTES.MANAGE_USER} element={<ManageUser />} /> */}
                {/* <Route path={ROUTES.MANAGE_Reported_User} element={<ManageReportedUser />} /> */}
                {/* <Route path={ROUTES.ADD_TOPICS} element={<AddTopics />} /> */}
                {/* <Route path={`${ROUTES.UPDATE_TOPICS}/:topicId`} element={<UpdateTopics />} /> */}
                <Route path={`${ROUTES.UPDATE_ADMIN}/:adminId`} element={<UpdateAdmin />} />
                {/* <Route path={ROUTES.MANAGE_TOPICS} element={<ManageTopics />} /> */}
                <Route path={ROUTES.SERVICES} element={<Services />} />
                <Route path={ROUTES.ADD_HOSPITAL} element={<AddHospital />} />
                <Route path={ROUTES.PROFILE} element={<Profile />} />
                <Route path={ROUTES.FAQS} element={<Faqs />} />
                <Route path={ROUTES.ADMIN_MANAGE} element={<AdminManagement />} />
                <Route path={ROUTES.ADD_ADMIN} element={<AddAdmin />} />
                <Route path={ROUTES.MANAGE_HOSPITAL} element={<HospitalManage />} />
                <Route path={ROUTES.MANAGE_USER} element={<UserManage />} />
            </Route>


           
        </Routes>
    )
}
