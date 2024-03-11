import styled from "styled-components"

const ShopItem = ({name,type,price,image}) => {
  return (
    <>
    <Item>
    <img className="product_image" src={`/${image}.png`} alt="first-product" />
    <div className="bottom_container">
    <p>{name}</p>
    <div className="price_container">
        <p className="item_name">{type}</p>
        <p>${price}</p>
    </div>
    </div>
    </Item>
    </>
  )
}

export default ShopItem

const Item = styled.div`
min-width: 336px;
p{
    font-weight: bold;
}

p.item_name{
    color:grey;
    font-weight: lighter;
}
    .bottom_container{
        max-width: 290px;
    }

    .price_container{
        display: flex;
        justify-content: space-between;
    }
.product_image{
    cursor: pointer;
   
}
.product_image:hover{
    opacity: 0.8;
}
`