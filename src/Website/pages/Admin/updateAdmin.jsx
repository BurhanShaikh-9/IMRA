import React from 'react'
import profilePic from '../../../assets/images/guy.png'
import { useState } from 'react'
// import { Topics } from '../../../----services/topics'
import { useParams } from "react-router";
import { useEffect } from 'react';
// import { AdminService } from '../../../----services/admin';

export const UpdateAdmin = () => {
    // let { adminId } = useParams();
    // const { getSingleAdmin, updateAdmin } = AdminService();

    // // console.log(topicId, 'IDD ');

    // useEffect(() => {
    //     getSingleAdmin(adminId).then((res) => {
    //         setAdminModel(res?.data?.admin)
    //         console.log(res?.data, 'ress');
    //     }).catch((res) => {
    //         console.log(res, 'err');
    //     })
    // }, [adminId])




    // // const { postTopics } = Topics();
    // const [adminModel, setAdminModel] = useState({
    //     image: null,
    //     username: '',
    //     email: '',
    //     // password: '123',
    //     phone: '',
    //     title: '',
    //     cnic: '',
    //     registered_user: 0,
    //     reported_user: 0,
    //     topics: 0,
    //     services: 0,
    //     manage: 0,
    //     add_admin: 0,

    // });

    // const getInput = (e) => {
    //     const fieldValue = e.target.type === 'checkbox' ? (e.target.checked ? 1 : 0) : e.target.value;
    //     const fieldName = e.target.name;
    //     setAdminModel({ ...adminModel, [fieldName]: fieldValue });
    // };

    // const getImageInput = (e) => {
    //     const fileValue = e.target.files[0];
    //     const fileName = e.target.name;
    //     const imageUrl = URL.createObjectURL(fileValue);

    //     setAdminModel({
    //         ...adminModel,
    //         [fileName]: fileValue,
    //         localmage: imageUrl,
    //     })
    // }


    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.set('image', adminModel.image);
    //     formData.set('username', adminModel.username);
    //     formData.set('email', adminModel.email);
    //     // formData.set('password', adminModel.password);
    //     formData.set('phone', adminModel.phone);
    //     formData.set('title', adminModel.title);
    //     formData.set('cnic', adminModel.cnic);
    //     formData.set('registered_user', adminModel.registered_user);
    //     formData.set('reported_user', adminModel.reported_user);
    //     formData.set('topics', adminModel.topics);
    //     formData.set('services', adminModel.services);
    //     formData.set('manage', adminModel.manage);
    //     formData.set('add_admin', adminModel.add_admin);

    //     console.log(formData, 'formDataa');
    //     updateAdmin(formData, adminId).then((res) => {
    //         console.log(res, 'formData Succ')
    //     }).catch((err) => {
    //         console.log(err, 'formData Succ')
    //     })
    // }


    return (
        <React.Fragment>

            <section className="mainSection">
                <div className="container">
                    <div className="mainSectionWrapper">
                        <div className="heading">
                            <p>Update Admin</p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">

                                <form className="additionForm"
                                // onSubmit={formSubmit}
                                >
                                    <div className="row g-4">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                            <div className="fields">
                                                <div className="profileImage">
                                                    {/* <img src={adminModel?.localmage || adminModel?.image || profilePic} alt="" className="profileImage" /> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorImage">Image</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="doctorImage"
                                                    name="image"
                                                // onChange={getImageInput}

                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Name</label>
                                                <input type="text" id="doctorName" name="username" placeholder={adminModel?.username} 
                                                // onChange={getInput}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Title</label>
                                                <input type="text" id="doctorName" name="title" placeholder={adminModel?.title} 
                                                // onChange={getInput}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Email</label>
                                                <input type="email" id="doctorName" name="email" placeholder={adminModel?.email} 
                                                // onChange={getInput}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Phone</label>
                                                <input type="number" id="doctorName" name="phone" placeholder={adminModel?.phone} 
                                                // onChange={getInput}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">CNIC</label>
                                                <input type="text" id="doctorName" name="cnic" placeholder={adminModel?.cnic} 
                                                // onChange={getInput}
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Registered User</label>
                                                <label className="switch">
                                                    <input type="checkbox" name='registered_user' onChange={getInput} />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Reported User</label>
                                                <label className="switch">
                                                    <input type="checkbox" name='reported_user' onChange={getInput} />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Topics</label>
                                                <label className="switch">
                                                    <input type="checkbox" name='topics' onChange={getInput} />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Services</label>
                                                <label className="switch">
                                                    <input type="checkbox" name='services' onChange={getInput} />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Admin Management</label>
                                                <label className="switch">
                                                    <input type="checkbox" name='manage' onChange={getInput} />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Add Admin</label>
                                                <label className="switch">
                                                    <input type="checkbox" name='add_admin' onChange={getInput} />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div> */}


                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                            <div className="fields">
                                                <button type="Submit" >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}
