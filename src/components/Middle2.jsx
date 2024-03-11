import styled from "styled-components"

const Middle2 = () => {
  return (
    
    <>
    <Image>
    <img className="image_brand_logo" src="brand_logo.png" alt="brand-logo" />
    <img className="image_main" src="second_image.png" alt="second_image" />
    </Image>
    </>
  )
}

export default Middle2;

const Image =  styled.section`
max-width: 1320px;
margin: 0 auto;
cursor: pointer;

    .image_brand_logo{
        margin-top: 77px;
        margin-bottom: 90px;
    }
    
`