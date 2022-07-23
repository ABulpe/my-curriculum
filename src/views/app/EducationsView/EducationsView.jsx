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
    height: 70vh;
    width: 100%;
    align-items: center;
    background-color: #f0f0f0;
    padding-top: 5%;
    padding-bottom: 5%;
`


export default EducationsView;