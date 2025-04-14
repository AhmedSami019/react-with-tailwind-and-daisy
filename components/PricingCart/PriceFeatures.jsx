import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PriceFeatures = ({option}) => {
    console.log(option);
    return (
        <p className='flex items-center gap-2'><CircleCheckBig size={15}j></CircleCheckBig> {option}</p>
    );
};

export default PriceFeatures;