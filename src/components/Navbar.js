import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return (
            <div>
                <div className="container mx-auto h-10 flex justify-end items-center p-12">
                    <Link className="bg-transparent hover:bg-teal-500 text-teal-400 font-semibold hover:text-white hover:w-1/4 py-2 px-4 border border-teal-400 hover:border-transparent rounded" to="/about">
                        Acerca de mi
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;