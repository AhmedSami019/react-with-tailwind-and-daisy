import { Suspense } from 'react'
import DaisyNav from '../components/DaisyNav/DaisyNav'
import Navbar from '../components/Navbar/Navbar'
import './App.css'
import PricingOptions from '../components/PricingOptions/PricingOptions'

const pricingPromise = fetch("pricingData.json")
                        .then(res => res.json())

function App() {

  return (
    <>
      
    <header>
    <Navbar></Navbar>
    </header>
    {/* <DaisyNav></DaisyNav> */}

    <main className='mt-5'>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
    </main>
      
    </>
  )
}

export default App
