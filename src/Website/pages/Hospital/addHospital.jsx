import React, { useState, useEffect } from 'react'
import profilePic from '../../../assets/images/guy.png'
import { HospitalService } from '../../../services/hospital';
import { toast } from 'react-toastify';
import Loader from '../../components/loader';


export const AddHospital = () => {
    const { postAddHospital } = HospitalService();
    const [isLoading, setIsLoading] = useState(false);


    const [hospitalData, setHospitalData] = useState({
        fullname: '',
        email: '',
        phonenumber: '',
        branch: '',
        address: '',
        avatar: '',
    })

    const onChangeHospital = (e) => {
        setHospitalData({ ...hospitalData, [e.target.name]: e.target.value })
    }
    const onChangeImage = (e) => {
        setHospitalData({ ...hospitalData, [e.target.name]: e.target.files[0] })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        const formData = new FormData();
        formData.set('avatar', hospitalData.avatar);
        formData.set('fullname', hospitalData.fullname);
        formData.set('email', hospitalData.email);
        formData.set('phonenumber', hospitalData.phonenumber);
        formData.set('branch', hospitalData.branch);
        formData.set('address', hospitalData.address);

        console.log(formData, 'hosss');

        postAddHospital(formData).then((res) => {
            console.log(res, 'response');
            toast.success('Hospital Added')
        }).catch((res) => {
            console.log(res, 'error');
            toast.error('Hospital Failed to Add')
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
                            <p>ADD HOSPITAL</p>
                        </div>
                        {
                            isLoading ?
                                <Loader />
                                :
                                <div className="card cardForm">
                                    <div className="card-body">

                                        <form className="additionForm"
                                            onSubmit={onSubmit}
                                        >
                                            <div className="row g-4">
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                                    <div className="fields">
                                                        <div className="profileImage">
                                                            <img src={hospitalData.avatar ? URL.createObjectURL(hospitalData.avatar) : profilePic} alt="" />
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
                                                            name="avatar"
                                                            onChange={onChangeImage}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Name</label>
                                                        <input type="text" id="doctorName" name="fullname" placeholder="Enter Name..."
                                                            onChange={onChangeHospital} required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Email</label>
                                                        <input type="email" id="doctorName" name="email" placeholder="Enter Email..."
                                                            onChange={onChangeHospital} required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Phone</label>
                                                        <input type="number" id="doctorName" name="phonenumber" placeholder="Enter Phone..."
                                                            onChange={onChangeHospital} required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Address</label>
                                                        <input type="text" id="doctorName" name="address" placeholder="Enter Address..."
                                                            onChange={onChangeHospital} required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Branch</label>
                                                        <input type="text" id="doctorName" name="branch" placeholder="Enter Branch..."
                                                            onChange={onChangeHospital} required
                                                        />
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
                                    </div>
                                </div>
                        }

                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}
