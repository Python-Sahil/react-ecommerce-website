import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { RiShoppingBagFill } from "react-icons/ri";
const Header = () => {
  return (
    <>
    <Upper>
        <IoSearch className="search_icon"/>
        <img className="shop_logo" src="/logo.png" alt="logo-image" />
        <div className="right_container">
        <div className="account_container">
        <IoPerson className="account_logo"/>
        <button>Account</button>
        </div>
        <div className="shopping_container">
        <RiShoppingBagFill  className="shopping_logo"/>
        <button>Shopping</button>
        </div>
        </div>
    </Upper>
    <Lower>
        <p>Jewelry & Accessories</p>
        <p>Clothing & Shoes</p>
        <p>Home & Living</p>
        <p>Wedding & Party</p>
        <p>Toys & Entertainment</p>
        <p>Art & Collectibles</p>
        <p>Craft Supplies& Tools</p>

    </Lower>
    </>
  )
}

export default Header

const Upper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1320px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 30px;

    .shop_logo{
        cursor: pointer;
        margin-left: 200px;
    }

    .search_icon,
    .account_logo,
    .shopping_logo{
        width: 20px;
        height:20px;
        cursor: pointer;
    }

    .search_icon:hover,
    .account_logo:hover,
    .shopping_logo:hover{
        color:grey;
    }

    .right_container{
        display: flex;
        gap: 22px;
        
        
    }
    button{
        margin-left: 2px;
        padding-bottom: 10px;
        vertical-align: middle;
        border: none;
        cursor: pointer;
        background-color: transparent;
    }
    button:hover{
        color: grey;
    }

`
const Lower = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1320px;
    margin: 0 auto;
    margin-top: 10px;

    p{
        cursor: pointer;
        font-family: Arial, Helvetica, sans-serif;
    }
    p:hover{
        color: grey;
    }
`