import React, { use } from 'react';
import PricingCart from '../PricingCart/PricingCart';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {

    const gymPackages = use(pricingPromise)
    const pricingData = gymPackages.gymPackages
    console.log(pricingData);

    return (
        <div className='md:px-14 px-7'>
            <h1 className='text-5xl font-semibold mb-8'>Take one as your need</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                {/* {
                    pricingData.map(pack => <PricingCart
                        key={pack.id}
                        pack={pack}></PricingCart>)
                } */}
                {
                    pricingData.map(pricing => <DaisyPricing pricing={pricing}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;