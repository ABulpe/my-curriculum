import styled from "styled-components"
import Portrait from "../../../components/Portrait/Portrait"
import About from "../../../components/About/About"
import ProfessionalSkills from "../../../components/Skills/Skills"
import Experience from "../../../components/Experience/Experience"
import Educations from "../../../components/Eduactions/Educations"

const Home = () => {

    return(

        <Main>
           <Section className="portrait">
                <Portrait/>
            </Section> 
           <Section>
                <About/>
                <ProfessionalSkills/>
                <Experience/>
                <Educations/>
           </Section>
        </Main>

    )


}

const Main = styled.main`
    display: flex;
    justify-content:center;
    height: fit-content;
    width: 100%;
    min-height: 100%;
    background-color: #f0f0f0;
    @media (max-width: 690px){
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
`

const Section = styled.section`
    margin: 20px;
    display: flex;
    width: 65%;
    flex-direction: column;
    align-items: flex-start;
    &.portrait{
        width: 35%;
        align-items: flex-end;

        
        @media (max-width: 690px){
            width: 88%;
            align-items: center;
            
        }
        
    }

    @media (max-width: 690px){
        width: 100%;
        align-items: center;
        
    }
`



export default Home;