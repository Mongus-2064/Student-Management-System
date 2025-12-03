import React from 'react'
import Addstudents from './components/Addstudent/Addstudent'
import Viewstudent from './components/Viewstudents/Viewstudents'
import { connectdb } from '@/lib/db'


export default function page() {
  
  return (
   <main className='bg-gray-100 h-screen'>
    <Addstudents/> 
    <Viewstudent/> 
   </main>
  )
}
