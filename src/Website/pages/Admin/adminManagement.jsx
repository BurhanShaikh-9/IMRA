import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai'
import { BiMessageSquareEdit } from 'react-icons/bi'
import { FiTrash } from 'react-icons/fi'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../utils/routes';
import { AdminService } from '../../../services/admin';

export const AdminManagement = () => {
    const { getAllAdmin, patchAdminToggle } = AdminService();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    // // USER Data
    useEffect(() => {
        getAllAdmin().then((res) => {
            setData(res?.data?.data)
            // console.log(res?.data?.data, 'resss');
        }).catch((err) => {
            console.log(err, "error")
        })
    }, [data])

    // const formDeletion = (userId) => {
    //     getDeleteAdmin(userId).then((res) => {
    //         console.log(res, 'response');
    //     }).catch((err) => {
    //         console.log(err, 'error');
    //     })
    // }


    // related to pagination and search of USER
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        setPageNumber(selectedPage);
    };
    const itemsPerPage = 8;
    const startIndex = pageNumber * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const currentItems = data.filter((item) => {
        if (searchTerm === '') {
            return item;
        } else if (
            item.fullname.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
            return item;
        }
    }).slice(startIndex, endIndex);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setPageNumber(0);
    };


    const getInput = (id) => {
        patchAdminToggle(id).then((res) => {
            // console.log(res, 'res');
        }).catch(() => {
            // console.log(res, 'res');
        })
    }


    return (
        <React.Fragment>
            <section className='mainSection'>
                <div className="container">
                    <div className="mainSectionWrapper">
                        <div className="heading">
                            <p>
                                MANAGE ADMIN
                            </p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">
                                <div className="tableSearch">
                                    {/* <div className="tableInnerHeading">
                            Physical Doctor
                        </div> */}
                                    <input type="text" placeholder="Search..."
                                        onChange={handleSearch}
                                    />
                                </div>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                {/* <th scope="col">User Id</th> */}
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Activity</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {currentItems.map((item, keyId) => (
                                                <tr key={keyId}>
                                                    <td>{item.fullname}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phonenumber}</td>
                                                    <td>{item.title}</td>
                                                    <td>
                                                        <label className="switch2">
                                                            <input type="checkbox" name='registered_user' checked={item?.is_active} onChange={() => getInput(item?._id)} />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <div className="actionButtons">
                                                            <Link to={`/${ROUTES.UPDATE_ADMIN}/${item._id}`}>
                                                                <BiMessageSquareEdit />
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                                <ReactPaginate
                                    pageCount={pageCount}
                                    onPageChange={handlePageClick}
                                    containerClassName={'pagination'}
                                    activeClassName={'active'}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
