// import React from 'react';
// import Base from './base';
// import AxiosSettings from './axiosSettings';
// import Cookies from 'js-cookie';
// import TokenService from './tokenService';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { ROUTES } from '../../utils/routes';

// const AuthService = () => {

//     const navigate = useNavigate();
//     const { baseUrl } = Base();
//     const { axiosInstance } = AxiosSettings();
//     const {saveCookie, deleteCookie} = TokenService();

//     const postAdminLogin = (data) => {
//         return axiosInstance.post(`${baseUrl}/api-admin/adminlogin`, data);
//     };

//     const successLogin = (response) => {
//         saveCookie(response.token)
//         navigate(ROUTES.DASHBOARD)
//     };

//     const postAdminRegister = (data) => {
//         return axiosInstance.post(`${baseUrl}/api-admin/register`, data);
//     };

//     const userLogout = ()=>{
//         deleteCookie();
//         navigate(ROUTES.LOGIN)
//     }

//     return {
//         postAdminLogin,
//         postAdminRegister,
//         successLogin,
//         userLogout
//     };
// }

// export default AuthService;