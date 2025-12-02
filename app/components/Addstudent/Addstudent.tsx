import { ImageUpscaleIcon, LucidePictureInPicture, UserPlus } from 'lucide-react'
import React from 'react'
import Viewstudents from '../Viewstudents/Viewstudents'



export default function Addstudents() {
  return (

    //  TOP SECTION 
    <main className='flex flex-col items-center'>
      <section className='flex flex-col justify-center items-center py-4 gap-2'>
        <h1 className='text-blue-500 text-4xl font-bold'>Student Management System</h1>
        <p className='text-gray-400'>Add and manage student information effortlessly</p>
      </section>


      {/* FORM HEADER SECTION */}

      <section className='w-[90%] shadow-2xl rounded-md p-4 bg-white'>
        <div>
          <div className='flex gap-2 items-center'>
            <UserPlus size={55} className='bg-gray-200 p-2 rounded-md text-blue-500' />
            <h1 className='text-3xl font-bold tracking-wide'>Add New Student</h1>
          </div>
          <p className='mt-2 text-gray-500'>Enter student details to add them to the system</p>
        </div>

        {/* ACTUAL FORM */}
        <form>

          {/* FULL NAME */}
          <div className='flex flex-col gap-2 mt-3'>
            <label htmlFor="Fullname">Full Name</label>
            <input
              className='bg-gray-200 p-2 rounded-md'
              type='text' id='Fullname' placeholder='e.g Nabin Khatri' />
          </div>

          {/* EMAIL ADDRESS */}

          <div className='flex flex-col gap-2 mt-3'>
            <label htmlFor='emali'>Email Address</label>
            <input
              className='bg-gray-200 p-2 rounded-md'
              type='email' id='email' placeholder='someone@gmail.com' />
          </div>

          {/* STUDENTS AGE */}

          <div className='flex flex-col gap-2 mt-3'>
            <label htmlFor='age'> Age </label>
            <input
              className='bg-gray-200 p-2 rounded-md'
              type='number' id='age' placeholder='20' />
          </div>

          {/* MAJOR SUBJECT */}
          <div className='flex flex-col gap-2 mt-3'>
            <label htmlFor='subject'>Major</label>
            <input
              className='bg-gray-200 p-2'
              type="text" id='subject' placeholder='computer science' />
          </div>

          {/* STUDENT PICTURE */}
          <div className='flex flex-col mt-3 gap-2 '>
            <h1 >Student Picture</h1>
            <div className=' w-32 bg-gray-200 rounded-md p-2 hover:bg-gray-300  mt-2'>
              <label htmlFor='studentpicture' className='flex flex-col hover:cursor-pointer  justify-center items-center gap-2 '><span><ImageUpscaleIcon /></span>Upload Picture</label >
            </div>

            <input type='file' accept='image/*' className='hidden' id='studentpicture' />
          </div>

          <div className=' mt-2'>
            <button
              type='submit'
              className='bg-blue-500 hover:cursor-pointer text-white p-3 rounded-md hover:scale-105 hover:text-[17px] transition-transform duration-300  w-full'>Upload Information</button>
          </div>

        </form>
      </section>
    </main>
  )
}
