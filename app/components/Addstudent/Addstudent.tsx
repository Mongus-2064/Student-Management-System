"use client"

import { ImageUpscaleIcon, UserPlus } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'
import Viewstudents from '../Viewstudents/Viewstudents'
import Image from 'next/image';
import { showToast } from 'nextjs-toast-notify';



export default function Addstudents() {

  const [fullname, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [photourl, setPhotoUrl] = useState<File>()
  const [major, setMajor] = useState<string>("");

  const handlepictureupload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const file = e.target.files?.[0]
      if(!file) return
      const finalurl = URL.createObjectURL(file);
      setPhoto(finalurl)
    } catch (error) {
      console.log(error)
    }
  }

  const handleupload = async (e:React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const form = new FormData();
    form.append("Fullname",fullname);
    form.append("age",age);
    form.append("major",major);
    form.append("photo",photo);
    form.append("email",email);


  const data = await fetch("/api/routes",{
    method: "POST",
    body: form
  });
  const res = await data.json()
  console.log(res)

  }


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
        <form onSubmit={handleupload}>

          {/* FULL NAME */}
          <div className='flex flex-col gap-2 mt-3'>
            <label htmlFor="Fullname">Full Name</label>
            <input
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              className='bg-gray-200 p-2 rounded-md'
              type='text' id='Fullname' placeholder='e.g Nabin Khatri' />
          </div>

          {/* EMAIL ADDRESS */}

          <div className='flex flex-col gap-2 mt-3'>
            <label htmlFor='emali'>Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='bg-gray-200 p-2 rounded-md'
              type='email' id='email' placeholder='someone@gmail.com' />
          </div>

          {/* STUDENTS AGE */}

          <div className='flex flex-col gap-2 mt-3'>
            <label htmlFor='age'> Age </label>
            <input
              onChange={(e) => setAge(e.target.value)}
              className='bg-gray-200 p-2 rounded-md'
              type='text' id='age' placeholder='20' />
          </div>

          {/* MAJOR SUBJECT */}
          <div className='flex flex-col gap-2 mt-3'>
            <label htmlFor='subject'>Major</label>
            <input
              onChange={(e) => setMajor(e.target.value)}
              className='bg-gray-200 p-2'
              type="text" id='subject' placeholder='computer science' />
          </div>

          {/* STUDENT PICTURE */}
          <div className='flex flex-col mt-3 gap-2 '>
            <h1 >Student Picture</h1>
            <div className=' w-32 bg-gray-200 rounded-md p-2 hover:bg-gray-300  mt-2'>
              <label htmlFor='studentpicture' className='flex flex-col hover:cursor-pointer  justify-center items-center gap-2 '><span><ImageUpscaleIcon /></span>Upload Picture</label >
            </div>

            <input

              onChange={handlepictureupload}
              type='file' accept='image/*' className='hidden' id='studentpicture' />

              {photo && (
                <div>
                  <Image
                  className='rounded-md'
                  src={photo}
                  alt='student-picture'
                  width={200}
                  height={200}
                  />
                </div>
              )}
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
