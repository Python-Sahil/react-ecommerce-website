import styled from "styled-components"

const Advertisement = () => {
  return (
    <>
    <Main className='main_container'>
        <img className="advertisement_image" src="/background.png" alt="advertisement" />
        <div className='text_container'>
            <p className="name">ZARA</p>
            <p className="description">Lustrous yet understated. The new evening
            wear collection exclusively offered at the
            reopened Giorgio Armani boutique in Los
            Angeles.</p>

            <button className="button_see">See Collection</button>
        </div>
    </Main>    
    </>
  )
}

export default Advertisement

const Main = styled.div`
    position: relative;
    .text_container{
        position: absolute;
        top: 30%;
        right: 0;
        max-width: 830px;
    }
    p{
        margin: 0;
        padding: 0;
    }
    .name{
        font-size: 4rem;
        font-family: 'Times New Roman', Times, serif;
        color: white;
        margin-bottom: 50px;
    }
    .description{
        max-width: 500px;
        color: white;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.5rem;
        margin-bottom: 50px;
    }
    .button_see{
        color: black;
        background-color: white;
        border: none;
        width: 200px;
        height: 50px;
        font-size: 1.2rem;
        cursor: pointer;

    }

    .advertisement_image{
        max-width: 1510px;
    }
`