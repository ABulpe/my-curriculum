import styled from "styled-components"
import {FaHome, FaCopy, FaIdCard, FaUserGraduate} from "react-icons/fa"
import {Link, NavLink, useLocation} from 'react-router-dom'

const Header = () => {
const location = useLocation();

const toggleMenu = () => {
    document.querySelector('.header-responsive--boton').classList.toggle('abierto')
    document.querySelector('.responsive-nav').classList.toggle('abierto')
    document.querySelector('body').classList.toggle('scroll-desactivado')
    if (document.querySelector('.overlay').style.display === 'none') {
        document.querySelector('.overlay').style.display = 'flex'
    } else closeDropdownOptions()
}

const closeMenu = () => {
    document.querySelector('.header-responsive--boton').classList.remove('abierto')
    document.querySelector('.responsive-nav').classList.remove('abierto')
    document.querySelector('body').classList.remove('scroll-desactivado')
    document.querySelector('.overlay').style.display = 'none'
    closeDropdownOptions()
}

const closeDropdownOptions = () => {
    document.querySelector('.overlay').style.display = 'none'
    const navUls = document.querySelectorAll('.responsive-nav--ul-child')
    navUls.forEach(ul => {
        if (!ul.classList.contains('hidden')) {
            ul.classList.add('hidden')
            ul.previousSibling.classList.remove('responsive-dropdown')
            ul.parentElement.classList.remove('responsive-dropdown--parent')
        }
    })
}

return (
    <>
        <StyledHeader>
            <NavLink to="/" className={"navlink"}><Title>FullStack Developer CV</Title></NavLink>
            <Nav>
                <Ul>
                    <Li><NavLink to="/" className={"navlink"}><FaHome/><Span>Home</Span></NavLink></Li>
                    <Li><NavLink to="/Skills" className={"navlink"}><FaCopy/><Span>Skills</Span></NavLink></Li>
                    <Li><NavLink to="/Experience" className={"navlink"}><FaIdCard/><Span>Experience</Span></NavLink></Li>
                    <Li><NavLink to="/Educations" className={"navlink"}><FaUserGraduate/><Span>Educations</Span></NavLink></Li>
                </Ul>
            </Nav>
            <Container className="header-responsive--boton" onClick={()=>toggleMenu()}>
                    <Container className="responsive-div responsive-div--uno"/>
                    <Container className="responsive-div responsive-div--dos"/>
                    <Container className="responsive-div responsive-div--tres"/>
            </Container>
        </StyledHeader>
        <Nav className="responsive-nav"> 
            <Ul className="responsive-ul">
                <Li className="responsive-li"><NavLink to="/" className={"navlink-responsive"} onClick={()=>closeMenu()}><FaHome/><Span>Home</Span></NavLink></Li >
                <Li className="responsive-li"><NavLink to="/Skills" className={"navlink-responsive"} onClick={()=>closeMenu()}><FaCopy/><Span>Skills</Span></NavLink></Li >
                <Li className="responsive-li"><NavLink to="/Experience" className={"navlink-responsive"} onClick={()=>closeMenu()}><FaIdCard/><Span>Experience</Span></NavLink></Li >
                <Li className="responsive-li"><NavLink to="/Educations" className={"navlink-responsive"} onClick={()=>closeMenu()}><FaUserGraduate/><Span>Educations</Span></NavLink></Li>
            </Ul>
            </Nav>
        <Container 
            className='overlay'
            style={{display: 'none'}}
            onClick={() => closeMenu()}
        />
    </>
   
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
    @media (max-width: 860px){
        font-size: 20px;
    }
`

const Nav = styled.nav`
    width: 40%;
    z-index: 1000;
    height:100%;
    display: flex;
    align-items: center;
    @media (max-width: 860px){
        display: none;
    }
    &.responsive-nav{
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #524ff0;
        width: 100%;
       
        &.abierto{
            display: flex;
        }
    }
`

const Ul = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    &.responsive-ul{
        display: flex;
        flex-direction: column;
        background-color: #524ff0;
        width: 100%;
     
    }
 

`

const Li = styled.li`
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size 18px;
    justify-content: center
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
    &>.navlink{
        color: white;
        text-decoration: none;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        position: relative;
            &::after {
                content: "";
                position: absolute;
                display: flex;
                width: 100%;
                height: 1.5px;
                bottom: 5px;
                left: 5px;
                background-color: white;
                transform: scaleX(0);
                transition: transform 0.3s ease;
            }
            &.active::after {
                transform: scaleX(1);
            }
        &:hover::after {
            transform: scaleX(1);
        }
    }   
    // &:hover {
    //    border-bottom: 1px solid white;
    //    padding: 0;
        
    // }
    &.responsive-li{
        display: flex;
        width: 100%;
        border: 1px solid white;
        justify-content: center;
        align-items: center;
        &>.navlink-responsive{
            color: white;
            text-decoration: none;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items:center;
            padding: 10px;
        }
        &:hover{
            background-color: white;
            color: #524ff0;
            justify-content: center;
            align-items: center;
            

            &>.navlink-responsive{
                color: #524ff0;
                text-decoration: none;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items:center;
              
            }
           
        }
    }
    
`
const Container = styled.div`
   
    height: fit-content;
    width: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    cursor: pointer;

    &.header-responsive--boton {
        display: none;

        @media (max-width: 860px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 5%;
        }

    }

    &.abierto{
        & > .responsive-div--uno {
            transform: rotate(-45deg) translate(-5px, 8px);
        }

        & > .responsive-div--dos {
            opacity: 0;
        }

        & > .responsive-div--tres {
            transform: rotate(45deg) translate(-4px, -8px);
        }

    }
    &.responsive-div {
        width: 100%;
        height: 3px;
        margin: 3px 0;
        background-color: white;
        border-radius: 0.5em;
        transition: all 0.5s;
        cursor: pointer;
    }

    &.overlay {

        position: fixed;
        width: 100%;
        height: 100%;
        cursor: pointer;
}

`

const Span = styled.span`
  
`

export default Header;