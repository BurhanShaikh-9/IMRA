import React,{useState, useEffect} from 'react'
import profilePic from '../../../assets/images/guy.png'

export const AddHospital = () => {

    return (
        <React.Fragment>

            <section className="mainSection">
                <div className="container">
                    <div className="mainSectionWrapper">
                        <div className="heading">
                            <p>Add Hospital</p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">

                                <form className="additionForm" 
                
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
                                         
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Name</label>
                                                <input type="text" id="doctorName" name="username" placeholder="Enter Name..." 
                                               
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Email</label>
                                                <input type="email" id="doctorName" name="email" placeholder="Enter Email..." 

                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Phone</label>
                                                <input type="number" id="doctorName" name="phone" placeholder="Enter Phone..." 

                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Address</label>
                                                <input type="text" id="doctorName" name="title" placeholder="Enter Address..."
                                              
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label htmlFor="doctorName">Branch</label>
                                                <input type="text" id="doctorName" name="title" placeholder="Enter Branch..."
                                              
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
