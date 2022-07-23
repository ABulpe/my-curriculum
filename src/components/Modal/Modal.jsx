import React from "react";
import styled from "styled-components"

const Modal = ({children, state, changeState, title, showHeader, showOverlay, modalPosition}) =>{

    return(
        <>
            {state &&
                <ModalOverlay
                    showOverlay = {showOverlay}
                    modalPosition = {modalPosition}
                    onClick={()=>changeState(false)}
                >
                    <Container>
                        {
                            showHeader &&
                            <EncabezadoModal>
                                <h3>{title}</h3>
                            </EncabezadoModal>
                        }
                        <BotonCerrar onClick={()=> changeState(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </BotonCerrar>
                        {children}
                    </Container>
                </ModalOverlay>
            }
        </>
    )

}

const ModalOverlay = styled.div`
    width: 100%;
    // min-height: fit-content;
    position: fixed;
    overflow-y: scroll;
    overscroll-behavior: contain;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${props => props.mostrarOverlay ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)'};
    padding: 40px;
    display: flex;
    align-items: ${props => props.posicionModal ? props.posicionModal : 'center' };
    justify-content: center;
    z-index: 3000;
    // cursor: pointer;
`

const BotonCerrar = styled.button`

    position: absolute;
    top: 15px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    background-color: #bdbbbb;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover {
        background: blue;
        color: white
    }

    svg {
        width: 100%;
        height: 100%;
    }

`
const Container = styled.div`

    // margin: 5vh 0;
    width: 30%;
    min-height: 100px;
    background-color: #fff;
    position: relative;
    border-radius: 0.5em;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px ;
    // z-index: 5000;

`
const EncabezadoModal = styled.div`

    display: flex
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3{
        font-weight: 500;
        font-size: 16px;
        color: blue;
    }

`

export default Modal;