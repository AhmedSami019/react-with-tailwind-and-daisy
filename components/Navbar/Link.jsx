import React from 'react';

const Link = ({route}) => {
    return (
            <li className='hover:bg-gray-200 px-4 rounded-md md:p-3'>
                <a href={route.path}>{route.name}</a>
            </li>
    );
};

export default Link;