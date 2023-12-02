import React, { useState, useEffect } from 'react'
import profilePic from '../../../assets/images/guy.png'
import { AdminService } from '../../../services/admin'
import Loader from '../../components/loader';
// import { Toast } from 'react-toastify/dist/components';
// import { AdminService } from '../../../services/admin'
import { toast } from 'react-toastify';


export const AddAdmin = () => {

    const { postAdmin } = AdminService();
    const [isLoading, setIsLoading] = useState(true);

    const [adminData, setAdminData] = useState({
        fullname: '',
        email: '',
        phonenumber: '',
        password: '123',
        avatar: '',
        title: '',
        type: 2,
        addHospital: 0,
        manageHospital: 0,
        addAdmin: 0,
        manageAdmin: 0,
        services: 0,
        manageUser: 0,
        reception: 0,
        is_active: true
    })


    const getInput = (e) => {
        const fieldValue = e.target.type === 'checkbox' ? (e.target.checked ? 1 : 0) : e.target.value;
        const fieldName = e.target.name;
        setAdminData({ ...adminData, [fieldName]: fieldValue });
    };
    const getFileInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.files[0];
        setAdminData({ ...adminData, [fieldName]: fieldValue })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(adminData, 'adminData');
        setIsLoading(true)
        const formData = new FormData();
        formData.set('avatar', adminData.avatar);
        formData.set('fullname', adminData.fullname);
        formData.set('email', adminData.email);
        formData.set('phonenumber', adminData.phonenumber);
        formData.set('password', adminData.password);
        formData.set('title', adminData.title);
        formData.set('type', adminData.type);
        formData.set('addHospital', adminData.addHospital);
        formData.set('manageHospital', adminData.manageHospital);
        formData.set('addAdmin', adminData.addAdmin);
        formData.set('manageAdmin', adminData.manageAdmin);
        formData.set('services', adminData.services);
        formData.set('manageUser', adminData.manageUser);
        formData.set('reception', adminData.reception);
        formData.set('is_active', adminData.is_active);
        console.log(formData, 'adminFormData');

        postAdmin(formData).then((res) => {
            console.log(res, 'res');
            toast.success('Admin Added')
        }).catch((res) => {
            console.log(res, 'err');
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
                            <p>ADD ADMIN</p>
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
                                                            {/* <img src={profilePic} alt="" /> */}
                                                            <img src={adminData.avatar ? URL.createObjectURL(adminData.avatar) : profilePic} alt="" />
                                                            {/* <img src={adminModel?.image ? URL.createObjectURL(adminModel.image) : profilePic} alt="" className="profileImage" /> */}
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
                                                            onChange={getFileInput}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Name</label>
                                                        <input type="text" id="doctorName" name="fullname" placeholder="Enter Name..."
                                                            onChange={getInput} required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Title</label>
                                                        <input type="text" id="doctorName" name="title" placeholder="Enter Title..."
                                                            onChange={getInput} required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Email</label>
                                                        <input type="email" id="doctorName" name="email" placeholder="Enter Email..."
                                                            onChange={getInput} required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Phone</label>
                                                        <input type="number" id="doctorName" name="phonenumber" placeholder="Enter Phone..."
                                                            onChange={getInput} required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row g-4">
                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Add Hospital</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='addHospital'
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
