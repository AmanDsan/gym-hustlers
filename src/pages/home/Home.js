import React from 'react';
import Style from './Home.module.css'
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';



export default function Home() {
  const navigate = useNavigate()
  function handleNavClick() {
    navigate('/registation')
  }

  return (
    <div className={Style.container}>     
      <Navbar />  
      <div className={Style.homeContent}>
        <h1>IT'S ALL ABOUT WHAT YOU CAN ACHIEVE</h1>
        <span>Empower Yourself to make the changes you need to make </span> <br />
        <Button onClick={handleNavClick} name='Join With Us' />
      </div>
      <div className={Style.footer}>
    <Footer/>
      </div>

    </div>
  )
}