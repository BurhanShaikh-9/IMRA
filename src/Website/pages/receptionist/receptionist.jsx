import React, { useState, useEffect } from 'react'
import profilePic from '../../../assets/images/guy.png'
import { HospitalService } from '../../../services/hospital';
import { UserService } from '../../../services/user';

export const Receptionist = () => {
    const [getUserId, setGetUserId] = useState()
    const { getSingleUser } = UserService();

    const onFormSubmit = (e) => {
        e.preventDefault();
        getSingleUser(getUserId).then((res) => {
            console.log(res?.data?.data, 'response');
        }).catch((res) => {
            console.log(res, 'error');
        })
    }

    return (
        <React.Fragment>

            <section className="mainSection">
                <div className="container">
                    <div className="mainSectionWrapper">
                        <div className="heading">
                            <p>Receptionist </p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">

                                <form className="additionForm" onSubmit={onFormSubmit}>
                                    <div className="row g-4 justify-content-center">


                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                            <div className="fields">
                                                <label >User ID</label>
                                                <div className='inputDivAbsolute'>
                                                    <input type="text" placeholder="Enter User ID..." required onChange={(e) => setGetUserId(e.target.value)} />
                                                    <button type="Submit" >
                                                        Find
                                                    </button>
                                                </div>
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
