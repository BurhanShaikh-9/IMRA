import React, { useState, useEffect } from 'react'
import profilePic from '../../../assets/images/guy.png'
// import { AdminService } from '../../../services/admin'

export const AddAdmin = () => {




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

                                <form className="additionForm"
                                // onSubmit={formSubmit} 
                                >
                                    <div className="row g-4">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                            <div className="fields">
                                                <div className="profileImage">
                                                    <img src={profilePic} alt="" />
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
                                                    name="image"
                                                    // onChange={getImageInput}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Name</label>
                                                <input type="text" id="doctorName" name="username" placeholder="Enter Name..."
                                                // onChange={getInput} required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Title</label>
                                                <input type="text" id="doctorName" name="title" placeholder="Enter Title..."
                                                //  onChange={getInput} required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Email</label>
                                                <input type="email" id="doctorName" name="email" placeholder="Enter Email..."
                                                // onChange={getInput} required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Phone</label>
                                                <input type="number" id="doctorName" name="phone" placeholder="Enter Phone..."
                                                // onChange={getInput} required
                                                />
                                            </div>
                                        </div>

                                        <div className="row g-4">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                <div className="fields">
                                                    <label htmlFor="doctorName">Add Hospital</label>
                                                    <label className="switch">
                                                        <input type="checkbox" name='registered_user'
                                                        // onChange={getInput}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                <div className="fields">
                                                    <label htmlFor="doctorName">Manage Hospial</label>
                                                    <label className="switch">
                                                        <input type="checkbox" name='reported_user'
                                                        //  onChange={getInput}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                <div className="fields">
                                                    <label htmlFor="doctorName">Add Admin</label>
                                                    <label className="switch">
                                                        <input type="checkbox" name='topics'
                                                        //  onChange={getInput} 
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                <div className="fields">
                                                    <label htmlFor="doctorName">Manage Admin</label>
                                                    <label className="switch">
                                                        <input type="checkbox" name='services'
                                                        // onChange={getInput}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                                                <div className="fields">
                                                    <label htmlFor="doctorName">Service</label>
                                                    <label className="switch">
                                                        <input type="checkbox" name='manage'
                                                        // onChange={getInput}
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}
