import React from 'react'
import '../styles/Section2.css'

const Section2 = () => {
  return (
    <div className=' container back2 '>
        <div className='pt-5'>
            <h2 className='text-center'>Try Post<span className='text-primary'>it</span></h2>
            <p className='text-center pt-3 para1'>Do you want to write or discover stories from writers on any topic?</p>
            <div className='text-center pt-4'>
                <input type="text"  className='w-25 input'/>
                <button className='btn btn text-light bg-primary rounded'>Get Started</button>
                </div>
        </div>
    </div>
  )
}

export default Section2