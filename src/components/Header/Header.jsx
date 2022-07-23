import styled from "styled-components"
import {FaHome, FaCopy, FaIdCard, FaUserGraduate} from "react-icons/fa"
import {Link, NavLink, useLocation} from 'react-router-dom'

const Header = () => {
 const location = useLocation();



return (
    <StyledHeader>
        <NavLink to="/" className={"navlink"}><Title>FullStack Developer CV</Title></NavLink>
        <Nav>
            <Ul>
                <Li><FaHome/><NavLink to="/" className={"navlink"}>Home</NavLink></Li>
                <Li><FaCopy/><NavLink to="/Skills" className={"navlink"}>Skills</NavLink></Li>
                <Li><FaIdCard/><NavLink to="/Experience" className={"navlink"}>Experiences</NavLink></Li>
                <Li><FaUserGraduate/><NavLink to="/Educations" className={"navlink"}>Educations</NavLink></Li>
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
    font-size 18px;
    justify-content: space-between;
    font-size: 18px;
    &:hover {
       border-bottom: 1px solid;
        
    }
`


export default Header;