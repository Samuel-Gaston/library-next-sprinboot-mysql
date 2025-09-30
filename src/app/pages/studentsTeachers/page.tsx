'use client';
import React from 'react'
import '../../components/Nav.css';
import Link from 'next/link';
import { easeOut, motion} from 'framer-motion';
import SidebarStudentTeacher from '@/app/components/SidebarStudentTeacher';
const page = () => {


           const variants = {
                hidden:{opacity:0, x:-100},
                visible:{opacity:1, x:0}
              }
  return (
    <div>
      <div className='justify-center'>
          <motion.div className='book'
             variants={variants}
              initial="hidden"
             whileInView= "visible"
             viewport={{once:true, amount:0.5}}
              transition={{ duration: 0.5}}>
            <div className='left-book bg-blue-950'>
    <div className='logo'><span style={{fontSize:50,color:'orange', fontWeight:'bold'}}>L</span><span style={{fontSize:40,color:'white', fontWeight:'bold'}}>i</span><span style={{fontSize:35,color:'orange', fontWeight:'bold'}}>b</span><span style={{fontSize:25, color:'white', fontWeight:'bold'}}>rary</span></div>
          <SidebarStudentTeacher />
         
         {/* <SidebarStudentTeacher />
         <div className='flex flex-wrap justify-center'>
             <button><Link href='/'>Logout</Link></button>
         </div> */}
            </div>
             <div className='right-book'>
                <h1 style={{marginTop:20, marginBottom:30}} className=' text-blue-950 text-3xl font-bold'>Students/Teachers</h1>
             <div className='right-sub flex flex-wrap justify-center text-center text-xl'>
            <div className='right1'><Link href='/'>
             <h1>Book Catalog</h1>
            </Link>
              </div>
               <div className='right2'>
              <Link href='/pages/studentsTeachers/borrow'>
                <h1>Borrow</h1></Link>
              </div>
               <div className='right3'>
                <Link href='/pages/studentsTeachers/loanHistory'>
                <h1>History</h1></Link>
              </div>
             </div>

              <div style={{marginTop:50}} className='right-sub flex flex-wrap justify-center text-center text-xl'>
            <div className='right1'>
          <Link href='/pages/studentsTeachers/reserve'>
           <h1>Reserve</h1></Link>
              </div>
               <div className='right2'>
                   <Link href='/pages/studentsTeachers/issue'>
                     <h1>Issues</h1>
                   </Link>
              </div>
               <div className='right3'>
             <Link href='/pages/studentsTeachers/renew'>
                <h1>Notifications</h1>
             </Link>
              </div>
             </div>
              
              
             </div>
        </motion.div>
      </div>
     
    </div>
  )
}

export default page;