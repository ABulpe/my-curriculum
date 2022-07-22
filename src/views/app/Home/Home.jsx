import styled from "styled-components"
import Portrait from "../../../components/Portrait/Portrait"
const Home = () => {

    return(

        <Main>
           <Section className="portrait">
                <Portrait/>
            </Section> 
           <Section></Section>
        </Main>

    )


}

const Main = styled.main`
    display: flex;
    justify-content:center;
    height: fit-content;
    width: 100%;
    min-height: 100%;
`

const Section = styled.section`
    display: flex;
    width: 65%;
    flex-direction: column;
    align-items: center;
    &.portrait{
        width: 35%;
    }
`



export default Home;