import React, { useState, useEffect } from 'react'
import profilePic from '../../../assets/images/guy.png'
import { HospitalService } from '../../../services/hospital';
import { toast } from 'react-toastify';
import Loader from '../../components/loader';
import { phoneValidation } from '../../../services/regex';


export const AddHospital = () => {
    const { postAddHospital } = HospitalService();
    const [isLoading, setIsLoading] = useState(false);
    const [isValidPhone, setIsValidPhone] = useState(false);


    const [hospitalData, setHospitalData] = useState({
        fullname: '',
        email: '',
        phonenumber: '',
        branch: '',
        address: '',
        avatar: '',
        password: '',
        add_doctor: 0,
        manage_doctor: 0,
        add_recption: 0,
        manage_recption: 0,
    })

    const validatePhone = (phone) => {
        return phoneValidation.test(phone);
    };
    
    const onChangeHospital = (e) => {
        const fieldValue = e.target.type === 'checkbox' ? (e.target.checked ? 1 : 0) : e.target.value;
        const fieldName = e.target.name;
        if (fieldName === 'phonenumber') {
            const isValid = validatePhone(fieldValue);
            setIsValidPhone(isValid);
        } else {
            setHospitalData({ ...hospitalData, [fieldName]: fieldValue });
        }
    };
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

        formData.set('password', hospitalData.password);
        formData.set('add_doctor', hospitalData.add_doctor);
        formData.set('manage_doctor', hospitalData.manage_doctor);
        formData.set('add_recption', hospitalData.add_recption);
        formData.set('manage_recption', hospitalData.manage_recption);


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
                                                    <div className="fields fieldErrorRelative">
                                                        <label htmlFor="doctorName">Phone</label>
                                                        <input className={!isValidPhone && 'errorValidation'} type="number" id="doctorName" name="phonenumber" placeholder="Enter Phone..."
                                                            onChange={onChangeHospital} required
                                                        />
                                                        {!isValidPhone && <p className='erroValidationText'>Invalid Phone Number</p>}
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

                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="doctorName">Password</label>
                                                        <input type="text" id="doctorName" name="password" placeholder="Enter Password..."
                                                            onChange={onChangeHospital} required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row" style={{marginTop: '20px'}}>

                                                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Add Doctor</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='add_doctor'
                                                                    onChange={onChangeHospital}
                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Manage Doctor</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='manage_doctor'
                                                                    onChange={onChangeHospital}
                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Add Reception</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='add_recption'
                                                                    onChange={onChangeHospital}
                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-6 col-lg-63 col-xl-3 ">
                                                        <div className="fields">
                                                            <label htmlFor="doctorName">Manage Reception</label>
                                                            <label className="switch">
                                                                <input type="checkbox" name='manage_recption'
                                                                    onChange={onChangeHospital}
                                                                />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                                    <div className="fields">
                                                        <button type="Submit" disabled={!isValidPhone} >
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
