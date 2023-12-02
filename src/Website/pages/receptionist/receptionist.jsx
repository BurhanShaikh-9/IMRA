import React, { useState, useEffect } from 'react'
import profilePic from '../../../assets/images/guy.png'
import { HospitalService } from '../../../services/hospital';
import { UserService } from '../../../services/user';
import { ReceptionistService } from '../../../services/reception';
import Loader from '../../components/loader';
import { ToastContainer, toast } from 'react-toastify';


export const Receptionist = () => {
    const [getUserId, setGetUserId] = useState()
    const { getUserAllDetails } = ReceptionistService();
    const { getSingleUser } = UserService();
    const [isLoading, setIsLoading] = useState(false);
    const [isShowDetails, setIsShowDetails] = useState(false);

    const [userHistory, setUserHistory] = useState([])
    const [userDetails, setUserDetails] = useState({})
    const onFormSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // getUserAllDetails('654a08cf3a690fc1fb950455').then((res) => {
        getUserAllDetails(getUserId).then((res) => {
            const response = res?.data?.data;
            setUserHistory(response)
            console.log(response, 'response');
            toast.success('User Found')
            setIsShowDetails(true);
            getSingleUser(response[0].user).then((res) => {
                const userResponse = res.data.data;
                setUserDetails(userResponse)
                console.log(userResponse, 'userResponse')
            }).catch((res) => {
                console.log("error", res);
            }).finally(() => {
                setIsLoading(false)
            })
        }).catch((res) => {
            toast.error('User Not Found')
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
                                                    <input type="text" placeholder="Enter User ID..." onChange={(e) => setGetUserId(e.target.value)} />
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

                        {
                            isShowDetails &&
                            <div className="card cardForm marginCardTop">
                                <div className="card-body">
                                    {
                                        isLoading ?

                                            <Loader />
                                            :
                                            <React.Fragment>

                                                <div className="heading">
                                                    <p>User Details </p>
                                                </div>
                                                <div className='receptionistUserDetails'>
                                                    <img className='userImage' src={userDetails.avatar} alt="" />
                                                    <div className="userPersonalWrapper">

                                                        <div>
                                                            <span className='userTitle'>FullName :</span> <span>{userDetails.fullname}</span>
                                                        </div>
                                                        <div >
                                                            <span className='userTitle'>Phone Number :</span> <span>{userDetails.phonenumber}</span>
                                                        </div>
                                                        <div>
                                                            <span className='userTitle'>Email :</span> <span>{userDetails.email}</span>
                                                        </div>
                                                        <div>
                                                            <span className='userTitle'>
                                                                Address :
                                                            </span>  <span>
                                                                {userDetails.address}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className='userTitle'>
                                                                Country :
                                                            </span> <span>
                                                                {userDetails.country}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className='userTitle'>
                                                                Date of Birth :
                                                            </span> <span>
                                                                {userDetails.date_of_birth}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="heading marginCardTop">
                                                    <p>User History </p>
                                                </div>

                                                {
                                                    userHistory.map((item, keyId) => (
                                                        <div className="card cardForm marginCardHalfTop" key={keyId}>
                                                            <div className="card-body">
                                                                <div className='receptionistUserDetails'>
                                                                    <div className="userPersonalWrapper">
                                                                        <div >
                                                                            <span className='userTitle'>
                                                                                Medical Center :
                                                                            </span> <span>
                                                                                {item.medCenter}
                                                                            </span>
                                                                        </div>
                                                                        <div key={keyId}>
                                                                            <span className='userTitle'>
                                                                                Procedure :
                                                                            </span> <span>
                                                                                {item.procedure}
                                                                            </span>
                                                                        </div>
                                                                        <div key={keyId}>
                                                                            <span className='userTitle'>
                                                                                Reason :
                                                                            </span> <span>
                                                                                {item.reason}
                                                                            </span>
                                                                        </div>
                                                                        <div key={keyId}>
                                                                            <span className='userTitle'>
                                                                                Date :
                                                                            </span> <span>
                                                                                {item.date}
                                                                            </span>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))

                                                }
                                            </React.Fragment>

                                    }

                                </div>
                            </div>
                        }

                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}
