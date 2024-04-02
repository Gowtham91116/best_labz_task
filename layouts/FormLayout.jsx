import React from 'react'

const FormLayout = ({children}) => {
  return (
    <div className='flex justify-center align-middle py-[190px]'>
        <div className="my-auto border max-w-[300px] bg-[#0000000F] w-full rounded-md px-9 py-10">
        {children}
        </div>
    </div>
  )
}

export default FormLayout