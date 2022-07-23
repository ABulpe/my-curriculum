import styled from "styled-components"

const Experience = () =>{

    return(
        <Card>
            <Title>EXPERIENCE</Title>
            <Container>
                <Date>Junio 2022 - Presente</Date>
                <Container className="experience">
                    <Divider/>
                    <MyExperience>
                        <Title>Desarrollador FullStack</Title>
                        <Content>
                            AppliedIT SL:
                            <Ul>
                                <Li>Desarrollo Frontend de aplicaciones Web utilizando React.JS</Li>
                                <Li>Desarrollo Backend de apLicaciones Web utiLizando .Net</Li>
                                <Li>Base de datos SQLServer</Li>
                                <Li>Maquetación Web con CSS y Styled-components</Li>
                            </Ul>
                        </Content>
                    </MyExperience>
                </Container>  
            </Container>
        </Card>
    )

}

const Card = styled.div`
    margin: 3px 0 20px 0;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 80%;
    background-color: white;
    box-shadow: 3px 3px 10px grey;
    padding: 20px;
    min-height: 33vh;
    
`
const Title = styled.h2`
    font-size: 20px;
    margin: 0 0 5px 0;
    &.subtitle{
        font-size: 18px;
        color: grey;
    }

`

const Content = styled.p`
    font-weight: bold;
   
`
const Ul = styled.ul`
    margin: 0 0 0 30px;
`
const Li = styled.li`
    font-weight: 400;
    
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-weight: 400px;
    color: #4a4a4a
    font-size: 18px;
    margin: 10px 0 10px 0;
    height: fit-content;

    &.experience{
        justify-content: flex-start;
        margin: 0 0 0 20px;
        align-items: flex-end;
    }

`
const MyExperience = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 30px;
    height: 17vh;
    justify-content: flex-end;


    
`
const Divider = styled.div`
    background-color: red;
    height: 14vh;
    width: 0.5vh;
    border-radius: 10px;
   
`

const Date = styled.h2`
    background-color: green;
    color: white;
    font-weight: 600;
    font-size: 18px;
    height: fit-content;
    width: 30%;
`

export default Experience;