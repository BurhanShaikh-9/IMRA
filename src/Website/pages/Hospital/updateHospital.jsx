import React, { useState, useEffect } from 'react'
import profilePic from '../../../assets/images/guy.png'
import { HospitalService } from '../../../services/hospital';
import { useParams } from 'react-router-dom';

export const UpdateHospital = () => {
    const {hospitalId} = useParams();
    const { patchUpdateHospital ,getSingleHospital } = HospitalService();
    

    const [hospitalData, setHospitalData] = useState({})
    const [localImage, setLocalImage] = useState({
        avatar:''
    })

    const onChangeHospital = (e) => {
        setHospitalData({ ...hospitalData, [e.target.name]: e.target.value })
    }
    const onChangeImage = (e) => {
        setHospitalData({ ...hospitalData, [e.target.name]: e.target.files[0] })
        setLocalImage({...localImage, [e.target.name]:e.target.files[0]})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.set('avatar', hospitalData.avatar);
        formData.set('fullname', hospitalData.fullname);
        formData.set('email', hospitalData.email);
        formData.set('phonenumber', hospitalData.phonenumber);
        formData.set('branch', hospitalData.branch);
        formData.set('address', hospitalData.address);

        // console.log(formData, 'hosss');

        patchUpdateHospital(hospitalId, formData).then((res) => {
            console.log(res, 'response');
        }).catch((res) => {
            console.log(res, 'error');
        })
    }

    useEffect(() => {
        getSingleHospital(hospitalId).then((res)=>{
            const {__v, _id, ...newgetData} = res?.data?.data
            setHospitalData(newgetData)
            // console.log(newgetData)
        }).catch((res)=>{
            console.log(res, 'error');
        })
    }, [])
    return (
        <React.Fragment>

            <section className="mainSection">
                <div className="container">
                    <div className="mainSectionWrapper">
                        <div className="heading">
                            <p>ADD HOSPITAL</p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">

                                <form className="additionForm"
                                    onSubmit={onSubmit}
                                >
                                    <div className="row g-4">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                            <div className="fields">
                                                <div className="profileImage">
                                                    <img src={localImage.avatar ? URL.createObjectURL(localImage.avatar) :(hospitalData.avatar ? hospitalData.avatar : profilePic)} alt="" />
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
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Name</label>
                                                <input type="text" id="doctorName" name="fullname" placeholder={hospitalData.fullname}
                                                    onChange={onChangeHospital}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Email</label>
                                                <input type="email" id="doctorName" name="email" placeholder={hospitalData.email}
                                                    onChange={onChangeHospital}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Phone</label>
                                                <input type="number" id="doctorName" name="phonenumber" placeholder={hospitalData.phonenumber}
                                                    onChange={onChangeHospital}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Address</label>
                                                <input type="text" id="doctorName" name="address" placeholder={hospitalData.address}
                                                    onChange={onChangeHospital}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Branch</label>
                                                <input type="text" id="doctorName" name="branch" placeholder={hospitalData.branch}
                                                    onChange={onChangeHospital}
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
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}
