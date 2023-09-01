// import React from 'react'
// import Base from './base'
// import axios from 'axios';
// import AxiosSettings from './axiosSettings';

// export const Topics = () => {
//     const { baseUrl } = Base();
//     const { axiosInstance } = AxiosSettings()

//     const postTopics = (data) => {
//         return axiosInstance.post(`${baseUrl}/api-admin/topic/addtopic`, data);
//     };
//     const getSingleTopics = (id) => {
//         return axiosInstance.get(`${baseUrl}/api-admin/topic/gettopic/${id}`);
//     };
//     const getAllTopics = () => {
//         return axiosInstance.get(`${baseUrl}/api-admin/topic/gettopic`);
//     };
//     const getTopicsPaginated = (funcPage, funcLimit) => {
//         return axiosInstance.get(`${baseUrl}/api-admin/topic/gettopic`, {
//             params: {
//                 page: funcPage,
//                 limit: funcLimit,
//             },
//         });
//     };
//     const updateTopic = (data, id) => {
//         return axiosInstance.patch(`${baseUrl}/api-admin/topic/updatetopic/${id}`, data);
//     };
//     const getDeleteTopics = (id) => {
//         return axiosInstance.delete(`${baseUrl}/api-admin/topic/deletetopic/${id}`);
//     };

//     return { updateTopic, postTopics, getAllTopics, getSingleTopics, getDeleteTopics, getTopicsPaginated }
// }
