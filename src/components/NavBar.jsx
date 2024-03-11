import styled from "styled-components"
import { FaFilter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <Nav>
    
        <div className="navigation">
            <p className="all_product">All Products</p>
            <p>T-shirt</p>
            <p>Hoodies</p>
            <p>Jacket</p>
        </div>
        <div>
            <button><FaFilter/>
            <p className="para_button">Filter</p>
            </button>
        </div>
        
    </Nav>
  )
}

export default NavBar

const Nav = styled.div`

display:flex;
justify-content:space-between;
align-items: center;
max-width: 1320px;
margin: 0 auto;
margin-bottom: 35px;


.navigation{
    display: flex;
    width: 370px;
    justify-content: space-between;
}
p{
    color: grey;
    cursor: pointer;
}
.all_product{
    font-weight: bold;
    color: black;
}

button{
    width: 80px;
    height: 30px;
    border: none;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
}
.para_button{
    color: white;
    margin-left: 5px;
}
`
