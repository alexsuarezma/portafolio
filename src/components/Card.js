import React from 'react';

const Card = (props)=>{
    return( 
        <div className={`py-16 rounded overflow-hidden ${props.isMiddleCard ? "border-l border-r" : ""}`}>
            <div className="w-full flex justify-center">
                <img className="w-56 h-56 rounded-full" src={props.image} alt="Sunset in the mountains"/>
            </div>
            <div className="text-center py-4">
                <div className="font-bold text-xl mb-2">{props.titleProject}</div>
                <p className="text-gray-700 text-base">
                    {props.description}
                </p>
            </div>
            <div class="flex items-center justify-around">
                <div class="ml-4 text-sm">
                    <a class="text-gray-900 hover:text-teal-600 leading-none" href={props.url} target="_blank">Visitar el proyecto</a>
                </div>
                    <p class="text-gray-600">Alex © {props.age}</p>
            </div>
        </div>
    )
};

export default Card;