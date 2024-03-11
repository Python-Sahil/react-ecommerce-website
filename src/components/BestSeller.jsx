import styled from "styled-components";
import NavBar from "./NavBar";
import ShopItem from "./ShopItem";

const BestSeller = () => {
  return (<Best>
    <h1 style={{textAlign: 'center', marginTop: '100px', marginBottom: '35px'}}>Best Sellers</h1>
    <NavBar />
    <Shop>
    <ShopItem image="six_image" name="Basic Dress Green" type="Dress" price = "236.00"/>
    <ShopItem image="two_image" name="Nike Sportswear Future Luxe" type="Bag" price = "130.00"/>
    <ShopItem image="third_image" name="Geometric Print Scarf" type="Scarf" price = "53.00"/>
    <ShopItem image="fourth_image" name="Yellow Reserved Hoodie" type="Dress" price = "155.00"/>
    </Shop>
    </Best>

  )
}

export default BestSeller

const Best = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    margin-bottom: 140px;
`
const Shop = styled.div`
min-width: 1320px;
margin: 0 auto;
display: flex;

`