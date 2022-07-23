import styled from "styled-components"
import Modal from "../../components/Modal/Modal"
import React, {useState} from "react"

const Educations = () =>{
    
    const [modalState, setModalState] = useState(false)
    const [image, setImage] = useState("")
    return(
        <Card>
            <Title>
                Educations
            </Title>
            <Table>
            <Thead>
                <Th>CERTIFICATE</Th>
                <Th>DATE</Th>
                <Th>SHOW</Th>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Técnico Superior en Desarrollo de Aplicaciones Web</Td>
                    <Td>2020-2022</Td>
                    <Td><Button onClick={() => {
                        setModalState(true)
                        setImage("/storage/img/notas.jpeg")
                    }
                    }>View</Button></Td>
                </Tr>
                <Tr>
                    <Td>Curso de Docker para desarrolladores</Td>
                    <Td>Abril 2022</Td>
                    <Td><Button onClick={() => {
                        setModalState(true)
                        setImage("/storage/img/docker.jpeg")
                    }
                    }>View</Button></Td>
                </Tr>
                <Tr>
                    <Td>Udemy: React-Guía definitiva: hooks router redux next</Td>
                    <Td>Julio 2022</Td>
                    <Td><Button onClick={() => {
                        setModalState(true)
                        setImage("/storage/img/reactCurso.jpg")
                    }
                    }>View</Button></Td>
                </Tr>

            </Tbody>
        </Table>
        <Modal
            title={"Certificate"}
            state={modalState}
            changeState= {setModalState}
            showHeader = {false}
            showOverlay={true}
            modalPosition={"center"}
        >
            <Img src={image} />
        </Modal>
        </Card>
    )

}

const Card = styled.div`
    margin: 3px 0 20px 0;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 80%;
    background-color: white;
    box-shadow: 3px 3px 10px grey;
    padding: 20px;
    min-height: 40vh;
    
`

const Title = styled.h2`
    font-size: 20px;
    margin: 0 0 5px 0;
    &.subtitle{
        font-size: 18px;
        color: grey;
    }

`

const Table = styled.table`
   border-collapse: collapse;
   width: 100%;
   font-family: Arial, Helvetica, sans-serif;
   margin: 10px 0 0 0;
`

const Tbody = styled.tbody`

`

const Thead = styled.thead`

   
   
`
const Th = styled.th`
    padding: 8px;
    text-align: left;
    font-size: 18px;
   
`

const Tr = styled.tr`
    &:hover{
        background-color: #ddd;
    }
    &:nth-child(odd){
        background-color: #f2f2f2;
        &:hover{
            background-color: #ddd;
        }
    }

`

const Td = styled.td`
    border: none;
    padding: 8px;
    height: 5vh;
    font-weight: 600;
    font-size: 16px; 
 
   
`
const Button = styled.button`
    background-color: #69b1ff;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 600;
    height: 3vh;
    padding: 5px;
    cursor: pointer;
    width: 70%;
    border: 1px solid #69b1ff;
   &:hover{
    background-color: white;
    color: #69b1ff;
   }
`

const Img = styled.img`
    height: 70%;
    width: 100%;
    object-fit: cover;
    object-position: top;
`


export default Educations;