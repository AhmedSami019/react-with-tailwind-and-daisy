import React, { use } from 'react';
import PricingCart from '../PricingCart/PricingCart';

const PricingOptions = ({pricingPromise}) => {

    const gymPackages = use(pricingPromise)
    const pricingData = gymPackages.gymPackages
    console.log(pricingData);

    return (
        <div className='px-14'>
            <h1 className='text-5xl font-semibold'>Take one as your need</h1>
            <div className='grid grid-cols-3 gap-8'>
                {
                    pricingData.map(pack => <PricingCart
                        key={pack.id}
                        pack={pack}></PricingCart>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;