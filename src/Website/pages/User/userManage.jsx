import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai'
import { BiMessageSquareEdit } from 'react-icons/bi'
import {FiTrash} from 'react-icons/fi'
// import { AdminService } from '../../../----services/admin';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../utils/routes';

export const UserManage = () => {

    return (
        <React.Fragment>
            <section className='mainSection'>
                <div className="container">
                    <div className="mainSectionWrapper">
                        <div className="heading">
                            <p>
                                Manage User
                            </p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">
                                <div className="tableSearch">
                                    {/* <div className="tableInnerHeading">
                            Physical Doctor
                        </div> */}
                                    <input type="text" placeholder="Search..."
                                    // onChange={handleSearch}
                                    />
                                </div>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                {/* <th scope="col">User Id</th> */}
                                                <th scope="col">User Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>name</td>
                                                <td>name@email.com</td>
                                                <td>09321424222</td>
                                                <td>

                                                    <div className="actionButtons">
                                                        <Link>
                                                            <BiMessageSquareEdit />
                                                            <FiTrash/>
                                                        </Link>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>name</td>
                                                <td>name@email.com</td>
                                                <td>09321424222</td>
                                                <td>

                                                    <div className="actionButtons">
                                                        <Link>
                                                            <BiMessageSquareEdit />
                                                            <FiTrash/>
                                                        </Link>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>name</td>
                                                <td>name@email.com</td>
                                                <td>09321424222</td>
                                                <td>

                                                    <div className="actionButtons">
                                                        <Link>
                                                            <BiMessageSquareEdit />
                                                            <FiTrash/>
                                                        </Link>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>name</td>
                                                <td>name@email.com</td>
                                                <td>09321424222</td>
                                                <td>

                                                    <div className="actionButtons">
                                                        <Link>
                                                            <BiMessageSquareEdit />
                                                            <FiTrash/>
                                                        </Link>
                                                    </div>

                                                </td>
                                            </tr>
                                            {/* {currentItems.map((item, keyid) => {
                                                return (
                                                    <tr key={keyid}>
                                                        <td>{item?.username}</td>
                                                        <td>{item?.email}</td>
                                                        <td>{item?.phone}</td>
                                                        <td>{item?.title}</td>
                                                        <td>{item?.cnic}</td>
                                                        <td>
                                                            <label className="switch2">
                                                                <input type="checkbox" name='registered_user' checked={item?.is_active}  onChange={() => getInput(item?._id)}/>
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                         <div className="actionButtons">
                                                            <Link to={`/${ROUTES.UPDATE_ADMIN}/${item?._id}`}>
                                                                <BiMessageSquareEdit />
                                                            </Link>
                                                        </div>
                                                         </td>
                                                    </tr>
                                                );
                                            })} */}
                                        </tbody>
                                    </table>
                                </div>
                                {/* <ReactPaginate
                                    pageCount={pageCount}
                                    onPageChange={handlePageClick}
                                    containerClassName={'pagination'}
                                    activeClassName={'active'}
                                /> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
