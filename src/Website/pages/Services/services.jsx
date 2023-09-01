import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast, ToastContainer } from 'react-toastify';

export const Services = () => {



    return (
        <React.Fragment>
            <section className='mainSection'>
                <div className="container">
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <div className="mainSectionWrapper">
                        <div className="heading">
                            <p>
                                SERVICES
                            </p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">
                                <div className="EditorMain">
                                    <div className="editorHeading">
                                        <p className='mainHeading'>
                                            Banner
                                        </p>
                                        <p className='subHeading'>
                                            Change HomePage Banner
                                        </p>
                                    </div>
                                    <input type="file" className='form-control' name="" id="" />
                                    <div className="editorButton">
                                        <button onClick={() => { toast.success('Updated'); }}>Update</button>
                                    </div>
                                </div>
                                <div className="EditorMain">
                                    <div className="editorHeading">
                                        <p className='mainHeading'>
                                            About Us
                                        </p>
                                        <p className='subHeading'>
                                            Enter About Us Details
                                        </p>
                                    </div>
                                    <ReactQuill className="aboutEditor" />
                                    <div className="editorButton">
                                        <button onClick={() => { toast.success('Updated'); }}>Update</button>
                                    </div>
                                </div>
                                <div className="EditorMain">
                                    <div className="editorHeading2">
                                        <p className='mainHeading'>
                                            Guidelines
                                        </p>
                                        <p className='subHeading'>
                                            Enter Guidelines Details
                                        </p>
                                    </div>
                                    <ReactQuill className="aboutEditor" />
                                    <div className="editorButton">
                                        <button onClick={() => { toast.success('Updated'); }}>Update</button>

                                    </div>
                                </div>
                                <div className="EditorMain">
                                    <div className="editorHeading2">
                                        <p className='mainHeading'>
                                            Terms & Conditions
                                        </p>
                                        <p className='subHeading'>
                                            Enter Terms & Condition Details
                                        </p>
                                    </div>
                                    <ReactQuill className="aboutEditor" />
                                    <div className="editorButton">
                                        <button onClick={() => { toast.success('Updated'); }}>Update</button>

                                    </div>
                                </div>
                                <div className="EditorMain">
                                    <div className="editorHeading2">
                                        <p className='mainHeading'>
                                            Privacy Policy
                                        </p>
                                        <p className='subHeading'>
                                            Enter Privacy Policy Details
                                        </p>
                                    </div>
                                    <ReactQuill className="aboutEditor" />
                                    <div className="editorButton">
                                        <button onClick={() => { toast.success('Updated'); }}>Update</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
