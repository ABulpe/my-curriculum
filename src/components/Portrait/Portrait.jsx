import styled from "styled-components"
import {BsLinkedin, BsFillHeartFill} from "react-icons/bs"


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
                <Container>
                        <a href="https://www.linkedin.com/in/alberto-bulpe-martinez-23579499/" target={"blank"}><Linkedin/></a>
                        {/* <Like/> */}
                </Container>
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

    @media (max-width: 690px){
        width: 100%;
    }

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
    @media (max-width: 690px){
        width: 100%;
        margin-top: 15px;
    }


`
const P = styled.p`
    font-size: 18px
`
const H2 = styled.h2`
    font-size: 22px
`
const Linkedin = styled(BsLinkedin)`
    font-size: 30px;
    color: #0a66c2;
    margin: 10px;   
`
const Like = styled(BsFillHeartFill)`
    font-size: 30px;
    color: #0a66c2;
    &:hover{
        color: red;
      
    }
    cursor: pointer;
    
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: fit-content;
    
`

export default Portrait;