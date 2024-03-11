import React from 'react'
import styled from 'styled-components'

const FollowPage = () => {
  return (
    <Follow>
        <p>Follow Products And Discounts On Instagram</p>
        <div className='insta_image'>
        <img className='image' src="/instapics.png" alt="insta-1" />
        <img  className='image' src="/instapics-2.png" alt="insta-2" />
        <img  className='image' src="/instapics-3.png" alt="insta-3" />
        <img  className='image' src="/instapics-4.png" alt="insta-4" />
        <img  className='image' src="/instapics-5.png" alt="insta-5" />
        <img  className='image' src="/instapics-6.png" alt="insta-6" />
        
        </div>

        <div className='subscribe_box'>
            <p className='subscribe_message'>Or Subscribe To The Newsletter</p>
           <div className='email'>
           <input className='input_box' type="email" placeholder='Email Address...'/>
            <button>Submit</button>
           </div>
        </div>
        
    </Follow>
    
  )
}

export default FollowPage

const Follow = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    margin-bottom: 40px;
    
    
    
    p{
        text-align: center;
        font-weight: bold;
        font-size: 2.8rem;
    }

    .insta_image{
        display: flex;
        gap: 24px;
        margin-bottom: 70px;

    }
    .image{
        cursor: pointer;
    }
    .image:hover{
        opacity: 0.8;
    }

    .subscribe_box .subscribe_message{
        margin-bottom:70px;
    }
    .email{
        max-width: 1320px;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .email .input_box{
      min-width: 640px;
      margin-right: 26px;
      border: none;
      outline: none;
      border-bottom: 1px solid #000;
      font-size: 1rem;
      padding: 15px;
      
    }
    .email button{
        border: none;
        outline: none;
        border-bottom: 1px solid #000;
        padding: 15px;
        font-size: 1rem;
        color: grey;
        cursor: pointer;

    }
    .email button:hover{
        color: black;
        border: 1px solid grey;
        border-radius: 10px;
    }
`