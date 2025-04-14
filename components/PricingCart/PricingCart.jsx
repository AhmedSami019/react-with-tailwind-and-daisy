import React from 'react';
import PriceFeatures from './PriceFeatures';

const PricingCart = ({pack}) => {
console.log(pack);
const {packageName, price, description, features} = pack
    return (
        <div className='bg-teal-100 mt-7 p-6 rounded-xl flex flex-col  items-center'>
            <h4 className='text-3xl font-semibold mb-2'>{packageName}</h4>
            <h5 className='text-xl font-medium'>$ {price}</h5>
            <div className='mt-5'>
                <h6>{description}</h6>
                <div className='bg-teal-200 p-5 mt-3 rounded-lg'>
                {
                    features.map(option => <PriceFeatures option={option}></PriceFeatures>)
                }
                </div>
            </div>
        </div>
    );
};

export default PricingCart;