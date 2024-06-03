import React from 'react';
import main_info from "../data/main_info";
import Bubble from './Bubble';
import {Link} from 'react-router-dom';


function Homepage(){
    return(
        <section className='home_main'>
            <h1>IMPROVING YOUR DOCTOR VISIT EXPERIENCE</h1>
            {main_info.map((info, i)=> <Bubble content={info} key={i}/>)}
            <Link to="/provider-search">Find a Provider</Link>
        </section>
    )

}

export default Homepage;