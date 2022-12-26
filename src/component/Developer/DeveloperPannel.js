import React from "react";
import SideNav from "../shared/sildenav";
const Developer = ()=>{

    return(
        <>
        <div className="containerr">

            <div className='row'>
                <div className="col-md-4">
                    <SideNav />
                </div>
                <div className="col-md-8">

                    <h1 className="text-center">Data</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <h1>Hello</h1>
                        </div>
                        <div className="col-md-4">
                        <h1>Hello</h1>

                        </div>
                        <div className="col-md-4">
                            <h1>Hello</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
} 

export default Developer;