import styled from "styled-components"
import Portrait from "../../../components/Portrait/Portrait"
import About from "../../../components/About/About"
import ProfessionalSkills from "../../../components/Skills/Skills"
import Experience from "../../../components/Experience/Experience"

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
        
    }
`



export default Home;