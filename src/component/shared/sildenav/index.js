import React from "react";

const SideNav = () =>{


    return (
        <>
        <div className="col-auto col-md-12 col-xl-2 px-sm-2 px-0" style={{ backgroundColor: "#212364" }}>
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline mt-5">Menu</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <a href="#" className="nav-link align-middle px-0">
                                        <i class="fa fa-dashboard"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0 align-middle">
                                    <i class="fa fa-address-book-o" style={{fontSize:"24px",color:"white"}}></i> <span className="ms-1 d-none d-sm-inline">Job Description</span></a>
                                                                     </li>

                                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
<i className="fa fa-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">View Skills</span> </a>
                                <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                    <i className=""></i> <span className="ms-1 d-none d-sm-inline">Add Skills</span>
                                </a>
                                <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fa fa-grid"></i> <span className="ms-1 d-none d-sm-inline">Location</span> </a>
                            </ul>
                            <hr />
                            <div className="dropdown mb-4">
                                <span className="d-none d-sm-inline float-right">Log out</span>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default SideNav