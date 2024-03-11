import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";



const Last = () => {
  return (
    <End>
        <div className='main-container'>
            <div className='info'>
            <img className="shop_logo" src="/logo.png" alt="logo-image" />
            <p  className='info_message'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates tenetur assumenda facilis nesciunt repudiandae laboriosam quo. Maiores commodi voluptate fugit voluptatibus ad omnis cumque. Animi quia possimus deserunt aliquam quod.</p>
            <div className='logos'>
            <FaFacebookF className='logo'/>
            <FaTwitter className='logo' />
            <FaLinkedinIn className='logo'/>
            <FaInstagram  className='logo'/>
            </div>

            </div>
            <div className='catalog'>
                <h3>CATALOG</h3>
                <p>Necklaces</p>
                <p>Hoodies</p>
                <p>Jewelry Box</p>
                <p>T-Shirt</p>
                <p>Jacket</p>
                
            </div>
            <div className='about_us'>
            <h3>ABOUT US</h3>
                <p>Our Procedure</p>
                <p>Sitemap</p>
                <p>FAQs</p>
                <p>About Us</p>
                <p>Terms & Conditions</p>
            </div>
            <div className='customer_service'>
            <h3>CUSTOMER SERVICES</h3>
                <p> Contact Us</p>
                <p>Track Your Order</p>
                <p>Peoduct Care Repair</p>
                <p>Book An Appointment</p>
                <p>Shopping & Returns</p>
            </div>
            </div>
    </End>
  )
}

export default Last

const End = styled.div`
    max-width: 1320px;
    margin: 0 auto;

    h3{
        margin:0px;
        cursor: pointer;
    }

    p{
        cursor: pointer;
    }
    p:hover{
        color: grey;
    }

    .main-container{
        display: flex;
        justify-content: space-between;
        
    }

    
    .info{
        max-width: 392px;
    }
    
    .info .logos{
        display: flex;
        gap: 38.5px;
        font-size: 1.2rem;
    }
    .info .logos .logo{
        cursor: pointer;
    }
    .info .logos .logo:hover{
        color: grey;
    }
    .info_message{
        color: grey;
        font-size: 1rem;
        align-items: baseline;
    }
`