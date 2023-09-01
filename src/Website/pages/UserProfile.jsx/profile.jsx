import React from 'react'
import profilePic from '../../../assets/images/guy.png'
export const Profile = () => {
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
                                                        src={profilePic}
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
                                                <input type="text" id="doctorName" name="fullname" placeholder="Enter Name..." required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Email</label>
                                                <input type="email" id="doctorName" name="fullname" placeholder="Enter Email..." required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Phone</label>
                                                <input type="number" id="doctorName" name="fullname" placeholder="Enter Phone..." required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">CNIC</label>
                                                <input type="text" id="doctorName" name="fullname" placeholder="Enter CNIC..." required
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
