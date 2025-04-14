import React from 'react';
import PriceFeatures from './PriceFeatures';

const PricingCart = ({pack}) => {
console.log(pack);
const {packageName, price, description, features} = pack
    return (
        <div className='border-2 border-gray-200 p-6 rounded-xl flex flex-col items-center'>
            {/* card header */}
            <div className='text-center'>
                <h4 className='text-3xl font-semibold mb-2'>{packageName}</h4>
                <h5 className='text-xl font-medium'>$ {price}</h5>
            </div>

            {/* card body */}
            <div className='mt-5 flex flex-col flex-1'>
                <h6>{description}</h6>
                <div className=' p-5 mt-3 rounded-lg '>
                {
                    features.map((option, index) => <PriceFeatures 
                    key={index}
                    option={option}></PriceFeatures>)
                }
                </div>
                <button className="btn w-full bg-green-400 text text-xl font-medium mt-auto">Subscribe</button>
            </div>
        </div>
    );
};

export default PricingCart;