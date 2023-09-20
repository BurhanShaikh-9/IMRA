import React, { useEffect, useState } from 'react'
import profilePic from '../../../assets/images/guy.png'
import { AdminService } from '../../../services/admin'
import TokenService from '../../../services/tokenService';
export const Profile = () => {

const {getSingleAdmin} = AdminService();
const { getUserCookie } = TokenService();

let userId = getUserCookie()
const [userObject, setUserObject] = useState({});

useEffect(() => {
    if (userId) {
        getSingleAdmin(userId).then((res) => {
            const { addAdmin, addHospital, manageAdmin, manageHospital, services, ...filteredAdminData } = res?.data?.data;
            setUserObject(filteredAdminData)
            console.log(filteredAdminData, 'res');
        }).catch((err) => {
            console.log(err, 'err');
        })
    }
}, [userId])

    return (
        <React.Fragment>

            <section className="mainSection">
                <div className="container">
                    <div className="mainSectionWrapper">
                        <div className="heading">
                            <p>PROFILE</p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">

                                <form className="additionForm" >
                                    <div className="row g-4">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                            <div className="fields">
                                                <div className="profileImage">
                                                    <img
                                                        src={userObject.avatar ? userObject.avatar : profilePic}
                                                        alt=""
                                                        className="profileImage" />
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
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Name</label>
                                                <input type="text" id="doctorName" name="fullname" placeholder={userObject.fullname} required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Email</label>
                                                <input type="email" id="doctorName" name="fullname" placeholder={userObject.email} required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Phone</label>
                                                <input type="number" id="doctorName" name="fullname" placeholder={userObject.phonenumber} required
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">CNIC</label>
                                                <input type="text" id="doctorName" name="fullname" placeholder="Enter CNIC..." required
                                                />
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
