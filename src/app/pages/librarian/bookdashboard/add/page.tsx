'use client';
import '../../../../components/Nav.css';
import React from 'react'
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { easeOut, motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Sidebar from '@/app/components/Sidebar';
interface data {
    image:string;
    name: string;
    author:string;
}
type Book = {
  name: string;
  author: string;
  // imageBase64?: string;
};

const page = () => {
 const router = useRouter();
      const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

    const [addBook, setaddBook] = useState<Book>({
    // image:"",
      name:"",
      author:"",
    })
    

  const handleSubmit = ()=>{
    if(!addBook.name || !addBook.author){
        Swal.fire({
     title: 'Error!',
      text: 'Fill in to signed up.',
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor:'darkblue'
        })
    }
    else{
      axios.post("http://localhost:8080/api/book", addBook).then((res) =>{
        // setaddBook({image:"", name:"", author:""});
        setaddBook(res.data)
             Swal.fire({
      title: 'Book added successful!',
      text: 'You have successfully added a book.',
      icon: 'success',
      confirmButtonText: 'OK',
        confirmButtonColor:'darkblue'
        })
        router.push('/pages/librarian/bookdashboard');
      })
      .catch((error) => {
        console.error(error);
      })
  
    }
  }
  
  return (
    <div>
       <div className='justify-center'>
          <motion.div className='book'>

            <div className='left-book bg-blue-950'>
    <div className='logo'><span style={{fontSize:50,color:'orange', fontWeight:'bold'}}>L</span><span style={{fontSize:40,color:'white', fontWeight:'bold'}}>i</span><span style={{fontSize:35,color:'orange', fontWeight:'bold'}}>b</span><span style={{fontSize:25, color:'white', fontWeight:'bold'}}>rary</span></div>
      <Sidebar />
         <div className='flex flex-wrap justify-center'>
             <button><Link style={{textDecoration:'none', color:'black'}}  href='/'>Logout</Link></button>
         </div>
            </div>

             <div className='right-book'>
   <div className='overall-borrow flex flex-wrap justify-between'>
            <br />
            <motion.div className='borrow'
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }} >
            <h1>Add a Book</h1>
            <br />
          {/* <input type='file' value={addBook.image} placeholder='Enter BookImage' onChange={(e) => setaddBook({...addBook, image: e.target.value})} /> */}
          <br />
          {/* <img src="http://localhost:8080/users/1/image" alt="Profile" /> */}

            <br /> 
          <input type='text' value={addBook.name} placeholder='Enter Name' onChange={(e) => setaddBook({...addBook, name: e.target.value})} />
          <br />
            <br />
          <input type='text' value={addBook.author} placeholder='Enter Author' onChange={(e) => setaddBook({...addBook, author:e.target.value})} />
          <br />
            <br />
          <button style={{marginBottom:30}} onClick={handleSubmit} className='bg-blue-900 text-white'>Submit</button> </motion.div>
        <br />
        <br />
        </div>       
             </div>
        </motion.div>
      </div>


          {/* <div className='overall-register bg-blue-900 flex flex-wrap justify-between'>
            <br />
            <motion.div className='register'
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }} >
            <h1>Add a Book</h1>
            <br />
          <input type='file' value={addBook.image} placeholder='Enter BookImage' onChange={(e) => setaddBook({...addBook, image: e.target.value})} />
          <br />
            <br /> 
          <input type='text' value={addBook.name} placeholder='Enter Name' onChange={(e) => setaddBook({...addBook, name: e.target.value})} />
          <br />
            <br />
          <input type='text' value={addBook.author} placeholder='Enter Author' onChange={(e) => setaddBook({...addBook, author:e.target.value})} />
          <br />
            <br />
          <button style={{marginBottom:30}} onClick={handleSubmit} className='bg-blue-900 text-white'>Submit</button> </motion.div>
        <br />
        <br />
        </div> */}

    </div>
  )
}

export default page;