import styled from "styled-components"

const ProfessionalSkills = () => {

    return(

        <Card>
            <Title>PROFESSIONAL SKILLS</Title>
            <Container> 
                <Skill>
                    <Img src= "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
                    <Range value={90} max={100}/>
                </Skill>
                <Skill>
                    <Img src= "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
                    <Range value={85} max={100}/>
                </Skill>
            </Container>
            <Container> 
                <Skill>
                    <Img src= "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
                      <Range value={80} max={100}/>
                </Skill>
                <Skill>
                    <Img src= "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
                      <Range value={85} max={100}/>
                </Skill>
            </Container>
            <Container> 
                <Skill>
                    <Img src= "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
                      <Range value={85} max={100}/>
                </Skill> 
                <Skill>
                    <Img src= "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
                      <Range value={50} max={100}/>
                </Skill>
            </Container>
            <Container> 
                <Skill>
                    <Img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
                      <Range value={75} max={100}/>
                </Skill>
                <Skill>
                    <Img src= "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white"/>
                      <Range value={65} max={100}/>
                </Skill>
            </Container>
            <Container> 
                <Skill>
                    <Img src= "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/>
                      <Range value={80} max={100}/>
                </Skill>
                <Skill>
                    <Img src= "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"/>
                      <Range value={50} max={100}/>
                </Skill>
            </Container>
        </Card>

    );

}

const Card = styled.div`
    margin: 3px 0 20px 0;
    display: flex;
    flex-direction: column;
    height: 42vh;
    width: 80%;
    background-color: white;
    box-shadow: 3px 3px 10px grey;
    padding: 20px;
    
`

const Title = styled.h2`
    font-size: 20px;
    margin: 0 0 5px 0;
    &.subtitle{
        font-size: 18px;
        color: grey;
    }

`
const Img = styled.img`
    border-radius:  20px
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-weight: 400px;
    color: #4a4a4a
    font-size: 18px;
    margin: 10px 0 10px 0;
    height: 100%;

`

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    height: 100%
    
    
`

const Range = styled.progress`
    width: 80%;
    height: 15%;
    margin: 5px 0 0 0;
    border-radius: 30px;
    border: 1px solid black;
    &::-webkit-progress-bar{
        background-color: #f5ffff ;
    }
    &::-webkit-progress-value { background: #fab70c; }
   
   
   
`

export default ProfessionalSkills;