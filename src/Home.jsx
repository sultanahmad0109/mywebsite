import React from 'react';
import Common from './Common';
import img from '../src/img/imghome.svg';

const Home = () => {
    return (<>
        <Common
            img={img}
            tag="Learn coding with "
            link="/learning"
            btn="Get started"
            line="I am the student of Computer Science department"
        />
    </>);
}

export default Home;