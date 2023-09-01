import ReactPaginate from 'react-paginate';
import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai'
import { BiMessageSquareEdit } from 'react-icons/bi'
import { FaBan } from 'react-icons/fa'


export const ManageUser = () => {

    // USER Data
    const data = [
        { name: "User1", id: "1", date: "1/2/2020", Topics_Joined: "3", email: "user@gmail.com", IP: "192.768.9.9:12344" },
        { name: "User2", id: "2", date: "1/2/2020", Topics_Joined: "3", email: "user@gmail.com", IP: "192.768.9.9:12344" },
        { name: "User3", id: "3", date: "1/2/2020", Topics_Joined: "3", email: "user@gmail.com", IP: "192.768.9.9:12344" },
        { name: "User4", id: "4", date: "1/2/2020", Topics_Joined: "3", email: "user@gmail.com", IP: "192.768.9.9:12344" },
        { name: "User5", id: "5", date: "1/2/2020", Topics_Joined: "3", email: "user@gmail.com", IP: "192.768.9.9:12344" },
        { name: "User6", id: "6", date: "1/2/2020", Topics_Joined: "3", email: "user@gmail.com", IP: "192.768.9.9:12344" },
        { name: "User7", id: "7", date: "1/2/2020", Topics_Joined: "3", email: "user@gmail.com", IP: "192.768.9.9:12344" },
        { name: "User8", id: "8", date: "1/2/2020", Topics_Joined: "3", email: "user@gmail.com", IP: "192.768.9.9:12344" },
    ]


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
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
            return item;
        }
    }).slice(startIndex, endIndex);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setPageNumber(0);
    };


    return (
        <React.Fragment>
            <section className='mainSection'>
                <div className="container">
                    <div className="mainSectionWrapper">
                        <div className="heading">
                            <p>
                                USERS
                            </p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">
                                <div className="tableSearch">
                                    {/* <div className="tableInnerHeading">
                            Physical Doctor
                        </div> */}
                                    <input type="text" placeholder="Search..." onChange={handleSearch} />
                                </div>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">User Id</th>
                                                <th scope="col">User Name</th>
                                                <th scope="col">Registered Date</th>
                                                <th scope="col">Topics Joined</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">IP</th>
                                                <th scope="col">Ban</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentItems.map((item, keyid) => {
                                                return (
                                                    <tr key={keyid}>
                                                        <td>{item?.id}</td>
                                                        <td>{item?.name}</td>
                                                        <td>{item?.date}</td>
                                                        <td>{item?.Topics_Joined}</td>
                                                        <td>{item?.email}</td>
                                                        <td>{item?.IP}</td>
                                                        <td> <button> <FaBan/> BAN</button> </td>
                                                      
                                                    </tr>
                                                );
                                            })}
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
