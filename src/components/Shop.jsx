import styled from "styled-components"
import NavBar from "./NavBar";
import ShopItem from "./ShopItem";

const Shop = () => {
  return (
    <>
    
    <h1 style={{textAlign: 'center', marginTop: '100px', marginBottom: '35px'}}>Or Subscribe To The Newsletter</h1>
    <NavBar />
    <Shopping>
    <ShopItem image="product_one" name="Adicolor Classics Joggers" type="Dress" price = "63.85"/>
    <ShopItem image="two_image" name="Nike Sportswear Future Luxe" type="Bag" price = "130.00"/>
    <ShopItem image="third_image" name="Geometric Print Scarf" type="Scarf" price = "53.00"/>
    <ShopItem image="fourth_image" name="Yellow Reserved Hoodie" type="Dress" price = "155.00"/>
    <ShopItem image="five_image" name="Nike Air Zoom Pegasus" type="Show" price = "198.00"/>
    <ShopItem image="six_image" name="Basic Dress Green" type="Dress" price = "236.00"/>
    <ShopItem image="seven_image" name="Nike Repel Miler" type="Dress" price = "120.50"/>
    <ShopItem image="eight_image" name="Rayban Sunglasses" type="Glasses" price = "160.00"/>
    </Shopping>
    
    </>
  )
}

export default Shop

const Shopping = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
min-width: 1320px;
justify-content: center;
margin-bottom: 140px;


`
