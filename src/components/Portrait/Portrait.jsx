import styled from "styled-components"


const Portrait = () =>{

    return (
        <>
            <Card>
                <Img/>
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
    height: 40vh;
    width: 60%;
    background-color: white;
    box-shadow: 3px 3px 10px grey;

`

const Img = styled.img`
    height: 70%;
    width: 100%;
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