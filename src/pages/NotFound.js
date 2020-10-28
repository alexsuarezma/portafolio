import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NotFound extends Component{
  render(){
      return(
         <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="Home__col col-12 col-md-4">
                        <h1>Hmmm!</h1>
                        <p>No econtramos lo que buscabas.</p>
                        <Link to="/" className="btn btn-primary">
                                    Volver al Home
                        </Link>
                    </div>
                </div>
            </div>
         </div>
      );
  }
}

