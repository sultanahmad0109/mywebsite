import React from 'react';
import Common from './Common';
import photo from '../src/img/photo.jpg';

const About = () => {
    return (<>
        <Common
            img={photo}
            btn="Contact"
            link="/contact"
            line="Pursuing M.C.A from Shobhit university and my dream is to be one of the best Web Developer"
        />
    </>);
}

export default About;