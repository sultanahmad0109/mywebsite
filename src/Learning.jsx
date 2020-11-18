import React from 'react';
import Card from './Card';
import Data from './Data';

const Learning = () => {
    return (<>
        <div className="my-5">
            <h1 className="text-center">My Learnings</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {Data.map((val, index) => {
                            return (<>
                                <Card key={index} img={val.img} Title={val.Title} det={val.det} link={val.link} />
                            </>);
                        })}
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Learning;