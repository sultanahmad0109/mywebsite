import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (<>
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.img} className="card-img-top" alt="MySub" height="200vh" width="200vw" />
                <div className="card-body">
                    <h5 className="card-title">{props.Title}</h5>
                    <p className="card-text">{props.det}</p>
                    <a target='_' href={props.link} className="btn btn-primary">GoTo Link</a>
                </div>
            </div>
        </div>

    </>);
}
export default Card;