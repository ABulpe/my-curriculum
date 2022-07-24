import Educations from "../../../components/Eduactions/Educations";
import styled from "styled-components"

const EducationsView = () =>{

    return(
        <Main>
            <Educations/>
        </Main>
    )

}

const Main = styled.main`
    display: flex;
    justify-content:center;
    height: fit-content;
    width: 100%;
    align-items: center;
    background-color: #f0f0f0;
    padding-top: 5%;
    padding-bottom: 5%;
    min-height: 100%
    @media (max-width: 860px) {
        min-height: 100%;
    }
`


export default EducationsView;