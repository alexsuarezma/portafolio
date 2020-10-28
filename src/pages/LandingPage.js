import React, { Fragment } from 'react';
import Card from '../components/Card';

import ImageTry from '../assets/img/image.png';

const textTitle = '<HelloWorld/>';

const LandingPage = () =>(
    <Fragment>    
        <h1 className="mx-auto text-center text-5xl font-extrabold text-teal-900 mt-8"> {textTitle} </h1>
        <h1 className="mx-auto text-center text-3xl font-medium text-teal-900 my-8"> Portafolio </h1>
        <div className="border rounded-full py-16 container w-3/4 h-auto mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
            <Card
                image={ImageTry}
                titleProject="Instagram Web Clon" 
                description="Descripción" 
                age="2020"
                url="http://instagram-clone-as.herokuapp.com/"
            />
            <Card 
                image={ImageTry}
                titleProject="Clinica Vitalia" 
                description="Descripción"  
                age="2020"
                url="http://clinicavitalia.herokuapp.com/"
                isMiddleCard="true"
            />
            <Card 
                image={ImageTry}
                titleProject="Api Breaking Bad" 
                description="Descripción" 
                age="2020"
                url=""
            />
        </div>
    </Fragment>

);
export default LandingPage;
