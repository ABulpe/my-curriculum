import styled from "styled-components"
import {FaHome, FaCopy, FaIdCard, FaUserGraduate} from "react-icons/fa"

const Header = () => {

return (
    <StyledHeader>
        <Title>FullStack Developer CV</Title>
        <Nav>
            <Ul>
                <Li><FaHome/>Home</Li>
                <Li><FaCopy/>Skills</Li>
                <Li><FaIdCard/>Experiences</Li>
                <Li><FaUserGraduate/>Educations</Li>
            </Ul>
        </Nav>
    </StyledHeader>
)

}

const StyledHeader = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #524ff0;
    margin: 0px;

` 

const Title = styled.h1`
    color: white;
    font-size: 26px;
`

const Nav = styled.nav`
    width: 40%;
    height:100%;
    display: flex;
    align-items: center;
   
`

const Ul = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
 

`

const Li = styled.li`
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
`


export default Header;