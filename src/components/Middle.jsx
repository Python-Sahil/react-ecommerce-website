import { FaBagShopping } from "react-icons/fa6";
import styled from "styled-components";
const Middle = () => {
  return (
    <>
    <Body>
    <div className="left_side">
        <h1>Collections</h1>
        <p>You Can Explore And Shop Many Different Collection From Various Brands Here</p>
        <button>
            <div className="button_container">
        <FaBagShopping className="button-logo"/>
        <p className="para_button">Shop Now</p>
        </div>
        </button>
    </div>

    <img src="/first_image.png" alt="firstpage-image" />
    </Body>
    </>
  )
}

export default Middle

const Body = styled.section`
    display: flex;
    max-width: 1000px;
    margin: 0 auto;

    .left_side{
        margin-right: 116px;
    }

    h1{
        font-size: 4rem;
        font-weight: lighter;
    }
    p{
        font-size: 1.5rem;
    }
    button{
        background-color: #1a1616;
        color:white;
        font-size: 1rem;
        width: 150px;
        cursor: pointer;
        margin-top: 40px;
        border: none;
        border-radius:5px ;
        
    }
    button:hover{
        transition: 0.5s ease-in-out;
        background-color: black;
    }
    .para_button{
        font-size: 1rem;
    }
    .button_logo{
        color: white;
        width: 30px;
        height: 30px;
    }
    .button_container{
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
    }
`