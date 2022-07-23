import styled from "styled-components"


const Portrait = () =>{
    let img = "/storage/img/me2.jpeg"
    return (
        <>
            <Card>
                <Img src={img} alt="Profile Image"/>
                <TextImg>
                    <H2>Alberto Bulpe Martinez</H2>
                    <P>Full Stack Web Developer</P>
                </TextImg>
                
            </Card>
        </>
    )

}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 55%;
    background-color: white;
    box-shadow: 3px 3px 10px grey;
    min-height: 45vh;

`

const Img = styled.img`
    height: 70%;
    width: 100%;
    object-fit: cover;
    object-position: top;
`

const TextImg = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height:30%;
    flex-direction: column;

`
const P = styled.p`
    font-size: 18px
`
const H2 = styled.h2`
    font-size: 22px
`



export default Portrait;