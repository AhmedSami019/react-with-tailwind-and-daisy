import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PriceFeatures = ({option}) => {
    console.log(option);
    return (
        <p className='flex items-center gap-2'><CircleCheckBig size={15} color='#00f549'></CircleCheckBig> {option}</p>
    );
};

export default PriceFeatures;