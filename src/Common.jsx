import React from 'react';
import { NavLink } from 'react-router-dom';


const Common = (props) => {
    return (<>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">


                            <div className="col-md-6 pt-5 order-1 order-lg-2 d-flex justify-content-center flex-column">
                                <h1>
                                    {props.tag}<strong className="text-warning"> Sultan Ahmad</strong>
                                </h1>
                                <p className="my-3">
                                    {props.line}
                                </p>
                                <div className="mt-3">
                                    <NavLink to={props.link} className="btn get btn-outline-info" >{props.btn}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.img} className="img-fluid animated" alt="Home Image" width="500vw" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Common;