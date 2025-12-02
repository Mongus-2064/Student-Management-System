import { GraduationCap } from 'lucide-react'
import React from 'react'

export default function Viewstudents() {
    return (
        <main className='flex flex-col items-center mt-6 justify-center  '>
            <div className='flex flex-col w-[90%] bg-white shadow-2xl p-8 '>


                {/* HEADER  */}

                <section className='flex gap-2 flex-col  items-center'>
                    <div className='flex gap-4 items-center'>
                        <GraduationCap size={55} className='text-pink-600 bg-gray-200 p-2 rounded-md' />
                        <h1 className='text-4xl font-bold'>Students Directory</h1>
                    </div>
                    <p className='self-start text-gray-500'>View and manage all registered students</p>
                </section>

                {/* STUDENT SEARCHING FEATURE */}
                <section>
                    <input
                        className='p-4 w-full mt-5 outline-gray-400 bg-gray-300/80 focus:outline-blue-500 '
                        type='text' placeholder='Search by name,email or major...' />
                </section>


            </div>

        </main>
    )
}
