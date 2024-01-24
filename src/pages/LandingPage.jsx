import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { IPayblePin } from '../utils/icons.utils'
import IconButtonAppDownload from '../components/AppDownloadButton'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <div className='flex justify-center gap-4 my-20 bg-[#BDE7E7] rounded-full w-4/12 m-auto py-2 '>
      <img src={IPayblePin} alt='' />
      <span className='text-lg font-medium text-[#062F3F]'>Were launching Payble V2.1 in 10 days</span>
    </div>
    <div className=''>
      <h1 className='text-7xl mb-6 text-[#000000]'>No Gree! Go cashless with <span className='text-[#062F3F] font-Millik'>Payble</span></h1>
      <h4 className='text-3xl text-[#686868]'>Send, receive, track and manage your money, and business, your way!</h4>
    </div>
    <div className="my-10  flex justify-center">
            <IconButtonAppDownload
                  onClick={() => console.log('Button clicked')}
                  label="Download on"
                  iconLeft={true}
                  iconRight={true}
                />
            </div>
    <Footer />
    </>
  )
}

export default LandingPage