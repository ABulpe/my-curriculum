import Skills from "../../../components/Skills/Skills"
import styled from "styled-components"
const SkillsView = () => {

    return(
        
        <Main>
            <Skills/>
        </Main>
    
    )
   

}

const Main = styled.main`
    display: flex;
    justify-content:center;
    height: 100%;
    width: 100%;
    align-items: center;
    background-color: #f0f0f0;
    padding-top: 5%;
    padding-bottom: 5%;
    min-height: 100%;
`


export default SkillsView;