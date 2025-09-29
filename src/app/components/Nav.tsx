'use client';
import React from 'react'
import Link from 'next/link';
import './Nav.css';
import { easeOut, motion} from 'framer-motion';
import Image from 'next/image';
import Data2 from '../Data/Data2';
import Data from '../Data/Data';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import { MdLibraryBooks } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { FaHandshakeSimple } from "react-icons/fa6";
type Book = {
  name: string;
  author: string;
  imageBase64?: string; // optional
};

const Nav = () => {
         const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          const variants = {
            hidden:{opacity:0, x:-100},
            visible:{opacity:1, x:0}
          }

          const [book, setbook] = useState([])
          const getAllBooks = () =>{
    axios.get("http://localhost:8080/api/book").then((res) =>{
           setbook(res.data);
    })
  }

  useEffect(() =>{
    getAllBooks()
  },[]);
    
  return (
    <div>
     
      <div id='home' className='banner'>
             <div className='flex flex-wrap justify-center text-center'>
                <div className='Nav'>
            <div style={{marginLeft:110}} className='logo'><span className='text-blue-900' style={{fontSize:50, fontWeight:'bold'}}>L</span><span style={{fontSize:40,color:'black', fontWeight:'bold'}}>i</span><span className='text-blue-900' style={{fontSize:35, fontWeight:'bold'}}>b</span><span style={{fontSize:25, color:'black', fontWeight:'bold'}}>rary</span></div>
            <ul>
                <li><a href='#home'>Home</a></li>
                 <li><a href='#store'>Store</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#faqs'>FAQs</a></li>
                <button><Link style={{textDecoration:'none'}} href='/pages/login'>Sign-In</Link></button>
            </ul>
             </div>
             </div>
   <br />
      <br />
             <motion.div className='content flex flex-wrap justify-center'>
              <motion.div className='left-content'
      variants={variants}
      initial="hidden"
     whileInView= "visible"
     viewport={{once:false, amount:0.5}}
      transition={{ duration: 0.5}}>
         <h1>Browse $ <br /> Select E-Books</h1>
         <p>find your ideal books. read and educate yourself so well to gain
          hand on experience on past, present and future life.
         </p>
         <br />
         <button>Read Now</button>
              </motion.div>
              <div className='right-content' style={{backgroundColor:'white'}}>
    <Image src='/images/nineteen.jpg' alt='item-one' width={300} height={300}  />
              </div>
             </motion.div>      
          </div>

    
          <motion.div className='ok flex flex-wrap justify-center text-center'
      variants={variants}
      initial="hidden"
     whileInView= "visible"
     viewport={{once:false, amount:0.5}}
      transition={{ duration: 0.5}} style={{backgroundColor:'white'}}>
            <div style={{boxShadow:'0 0 1px', gap:10}}  className='left-ok'>
             <MdLibraryBooks size={40} className='flex flex-wrap justify-center text-blue-900' style={{margin:'auto',}} />
              <h1>Car Delivery</h1>
                <p style={{marginBottom:10}}>find your ideal books</p>
            </div>
            <div style={{boxShadow:'0 0 1px', gap:10}}  className='right-ok'>
              <VscGitPullRequestGoToChanges size={40} className='flex flex-wrap justify-center text-blue-900'  style={{margin:'auto',}} /> 
              <h1>Security</h1>
            <p style={{marginBottom:10}}>find your ideal books </p>
            </div>
            <div  style={{boxShadow:'0 0 1px', gap:10}} className='right-ok'>
              <FaHandshakeSimple size={40} className='flex flex-wrap justify-center text-blue-900'  style={{margin:'auto',}} />
              <h1>Nice pickline</h1>
               <p style={{marginBottom:10}}>find your ideal books</p>
            </div>
          </motion.div>
       


   <motion.div id='store' className='All'>
<br />
     <motion.div className='overall-cards'
      variants={variants}
      initial="hidden"
     whileInView= "visible"
     viewport={{once:true, amount:0.5}}
      transition={{ duration: 0.5}}>
      <h1 className='text-center text-xl font-bold'>Featured Books</h1>
        <div style={{gap:10, backgroundColor:'white', marginLeft:50, marginRight:50}} className='Cards grid grid-cols-4'>
       {Data.map((data) =>(
        <div style={{boxShadow:'0 0 1px', gap:10, marginTop:30, marginBottom:30}} className='justify-center' key={data.id}>
          <Image src={data.image} alt={data.name} width={200} height={300} />
          <p className='font-bold text-center'>{data.name}</p>
          <p className='text-center'>{data.written}</p>
          <button style={{marginBottom:30}} className='bg-blue-900 text-center flex flex-wrap justify-center'><Link href='/pages/login'>Borrow</Link></button>
        </div>
       ))}
       </div>
     </motion.div>


     <motion.div className='overall-cards'
     variants={variants}
      initial="hidden"
     whileInView= "visible"
     viewport={{once:true, amount:0.5}}
      transition={{ duration: 0.5}} style={{marginTop:20}}>
      <div style={{gap:10, marginLeft:50, marginRight:50}} className='Cards grid grid-cols-4 justify-center'>
        {book.map((books) =>(
          <div style={{boxShadow:'0 0 1px', gap:10, padding:30, marginBottom:30, backgroundColor:'white', marginTop:30}} key={books.id}>
            {/* <Image style={{width:90}} src={books.src} alt={books.name} width={200} height={200} /> */}
            <h1 style={{fontSize:20, marginBottom:0}} className='text-center font-bold'>{books.name}</h1>
            <p className='text-center'>{books.author}</p>
            <button style={{ width:'calc(70% - 20px)', marginLeft:30}} className='bg-blue-900 flex flex-wrap justify-center'><Link href='/pages/login'>Borrow</Link></button>
        </div>
        ))}
      </div>
     </motion.div>


      </motion.div>




        <motion.div id='about' className='flex flex-wrap justify-center'
      variants={variants}
      initial="hidden"
     whileInView= "visible"
     viewport={{once:true, amount:0.5}}
      transition={{ duration: 0.5}}>
      <h1 style={{marginTop:80, fontSize:30}} className='text-center font-bold'>About Library</h1>
       <div style={{backgroundColor:'white', marginBottom:30}} className='about flex flex-wrap justify-center'>
            <div className='left-about'>
      <Image src='/images/ten.jpg' alt='item' width={300} height={300}/>
            </div>
            <div className='right-about'>
              <h1>Up to 90% Discount</h1>
  <p>At Gro, we believe grocery shopping should be more than just filling a basket — it should be about nourishing families, supporting local farmers, and making healthy living easy for everyone.
</p>
<button>Cool</button>
            </div>
        </div>
     </motion.div>


        <div style={{marginBottom:150}} id="faqs" className="faqs">
          <br />
          <br />
 <motion.div className='flex flex-wrap justify-center'
       variants={variants}
      initial="hidden"
     whileInView= "visible"
     viewport={{once:false, amount:0.5}}
      transition={{ duration: 0.5}}>
       <details className='bg-blue-900'>
        <summary style={{fontSize:20}} className='bg-blue-900'>Can I reserve a book for future use ?</summary>
      <div className="content">
        <p>hello there</p>
      </div>
      </details>
     </motion.div>

      <motion.div className='flex flex-wrap justify-center'
        variants={variants}
      initial="hidden"
     whileInView= "visible"
     viewport={{once:false, amount:0.5}}
      transition={{ duration: 0.5}}>
        <details className='bg-blue-900'>
        <summary style={{fontSize:20}} >Can I renew a book after use ?</summary>
      <div className="content">
        <p>hello there</p>
      </div>
      </details>
      </motion.div>

        <motion.div className='flex flex-wrap justify-center'
          variants={variants}
      initial="hidden"
     whileInView= "visible"
     viewport={{once:false, amount:0.5}}
      transition={{ duration: 0.5}}>
      <details className='bg-blue-900'>
        <summary style={{fontSize:20}} >Can I request for a book ?</summary>
      <div className="content">
        <p>hello there</p>
      </div>
      </details>
        </motion.div>

      <br />
    </div>

 
          </div>
  )
}

export default Nav;