import styled from "styled-components"

const About = () =>{
    
    const description = "Soy un apasionado de la programación. Una de mis mayores motivaciones es aprender. Tengo buenas softskills y me encanta aprender de forma autodidacta."
    const personalInfo = {
        Addres: "Costa Rica 7 Portal 3 Bajo C 11519",
        Email: "albertobulpemartinez@gmail.com",
        Phone: "+34 651 999 284",
        MainLanguage: "Spanish",
        SecondLanguage: "English",
    }

    return(
        <Card>
            <AboutMe>
                <Title>ABOUT ME</Title>
                <Description>{description}</Description>
            </AboutMe>
            <Divider/>
            <PersonalInfo>
                <Title>PERSONAL INFO</Title>
                <Info>
                    <P><Span>Addres: </Span> {personalInfo.Addres}</P>
                    <P><Span>Email: </Span> {personalInfo.Email}</P>
                </Info>
                <Info>
                    <P><Span>Phone: </Span> {personalInfo.Phone}</P>
                    <P><Span>Main Language: </Span>{personalInfo.MainLanguage}</P>
                </Info>
                <Info>
                    <P><Span>Second Language: </Span>{personalInfo.SecondLanguage}</P>
                </Info>
            </PersonalInfo>
        </Card>
    );


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
   
    
`
const AboutMe = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0 10px 0;
`

const PersonalInfo = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px 0 10px 0;
`

const Title = styled.h2`
    font-size: 20px;
    margin: 0 0 5px 0;

`

const Description = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: grey;
`

const Divider = styled.hr`
    margin: 15px 0 15px 0;
    border-top: 1px solid black;
    border-radius: 10px;

`
const P = styled.p`
`
const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    font-weight: 400px;
    color: #4a4a4a
    font-size: 18px;
    margin: 10px 0 10px 0;
  
`
const Span = styled.span`
    font-weight: 600;
    font-size: 18px;
    color: black;
`
export default About;