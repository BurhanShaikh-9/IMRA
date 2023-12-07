import React from 'react'
import profilePic from '../../../assets/images/guy.png'
import { useState } from 'react'
import { useParams } from "react-router";
import { useEffect } from 'react';
import { AdminService } from '../../../services/admin';
import { toast } from 'react-toastify';
import Loader from '../../components/loader';
import { AdminManagement } from './adminManagement';


export const UpdateAdmin = () => {
    let { adminId } = useParams();
    const { getSingleAdmin, patchAdmin } = AdminService();
    const [isLoading, setIsLoading] = useState(false);
    const [adminModel, setAdminModel] = useState({});

    useEffect(()=>{
        console.log(adminModel,'adminModall');
    },[adminModel.manage_doctor])

    useEffect(() => {
        getSingleAdmin(adminId).then((res) => {
            setAdminModel(res?.data?.admin)
            console.log(res?.data?.data, 'ress');

        }).catch((res) => {
            console.log(res, 'err');
        })
    }, [])



    const getInput = (e) => {
        const fieldValue = e.target.type === 'checkbox' ? (e.target.checked ? 1 : 0) : e.target.value;
        const fieldName = e.target.name;
        setAdminModel({ ...adminModel, [fieldName]: fieldValue });
    };

    const getImageInput = (e) => {
        const fileValue = e.target.files[0];
        const fileName = e.target.name;
        const imageUrl = URL.createObjectURL(fileValue);

        setAdminModel({
            ...adminModel,
            [fileName]: fileValue,
            localmage: imageUrl,
        })
    }


    const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('avatar', adminModel.avatar);
        formData.set('fullname', adminModel.fullname);
        formData.set('email', adminModel.email);
        formData.set('phonenumber', adminModel.phonenumber);
        formData.set('title', adminModel.title);
        formData.set('type', adminModel.type);
        formData.set('addHospital', adminModel.addHospital);
        formData.set('manageHospital', adminModel.manageHospital);
        formData.set('addAdmin', adminModel.addAdmin);
        formData.set('manageAdmin', adminModel.manageAdmin);
        formData.set('services', adminModel.services);
        formData.set('manageUser', adminModel.manageUser);
        formData.set('reception', adminModel.reception);
        formData.set('add_doctor', adminModel.add_doctor);
        formData.set('manage_doctor', adminModel.manage_doctor);
        formData.set('dashboard', adminModel.dashboard);
        formData.set('is_active', adminModel.is_active);


        setIsLoading(true);

        console.log(formData, 'formDataa');
        patchAdmin(formData, adminId).then((res) => {
            console.log(res, 'formData Succ')
            toast.success('Admin Updated')
        }).catch((err) => {
            console.log(err, 'formData Succ')
            toast.error('Admin Failed to Update')
        }).finally(() => {
            setIsLoading(false)
        })
    }


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
                                {
                                    isLoading ?
                                        <Loader />
                                        :
                                        <form className="additionForm"
                                            onSubmit={formSubmit}
                                        >
                                            <div className="row g-4">
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                                    <div className="fields">
                                                        <div className="profileImage">
                                                            <img src={adminModel?.localmage || adminModel?.avatar || profilePic} alt="" className="profileImage" />
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
                                                            name="avatar"
                                                            onChange={getImageInput}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Name</label>
                                                        <input type="text" id="doctorName" name="fullname" placeholder={adminModel?.fullname}
                                                            onChange={getInput}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Title</label>
                                                        <input type="text" id="doctorName" name="title" placeholder={adminModel?.title}
                                                            onChange={getInput}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Email</label>
                                                        <input type="email" id="doctorName" name="email" placeholder={adminModel?.email}
                                                            onChange={getInput}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Phone</label>
                                                        <input type="number" id="doctorName" name="phonenumber" placeholder={adminModel?.phonenumber}
                                                            onChange={getInput}
                                                        />
                                                    </div>
                                                </div>


                                                <div className="row g-4">
                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Dashboard</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='dashboard'
                                                                    checked={adminModel?.dashboard}
                                                                    onChange={getInput}
                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Add Hospital</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='addHospital'
                                                                    checked={adminModel?.addHospital}
                                                                    onChange={getInput}
                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Manage Hospial</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='manageHospital'
                                                                    onChange={getInput}
                                                                    checked={adminModel?.manageHospital}

                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Add Admin</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='addAdmin'
                                                                    onChange={getInput}
                                                                    checked={adminModel?.addAdmin}

                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Manage Admin</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='manageAdmin'
                                                                    onChange={getInput}
                                                                    checked={adminModel?.manageAdmin}

                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Service</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='services'
                                                                    onChange={getInput}
                                                                    checked={adminModel?.services}

                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Reception</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='reception'
                                                                    onChange={getInput}
                                                                    checked={adminModel?.reception}

                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Manage User</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='manageUser'
                                                                    onChange={getInput}
                                                                    checked={adminModel?.manageUser}

                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Add Doctor</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='add_doctor'
                                                                    onChange={getInput}
                                                                    checked={adminModel?.add_doctor}

                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Manage Doctor</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='manage_doctor'
                                                                    onChange={getInput}
                                                                    checked={adminModel?.manage_doctor}

                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>




                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                                    <div className="fields">
                                                        <button type="Submit" >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}
