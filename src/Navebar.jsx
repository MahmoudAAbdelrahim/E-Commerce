import React from 'react'
import { BrowserRouter, Routes, Route, Link,  NavLink, redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaCartPlus} from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";

import Home from './Home'
import Cart from './Cart'
import RagistrPadg from './RagistrPadg'
import LoginPadg from './LoginPadg'
import ChackOut from './ChackOut'
import './index.css';


function Navebar() {
    return (
        <>
        {['md'].map((expand) => (
        <Navbar  key={expand} expand={expand} className="bg-body-tertiary mb-3 " id="Navbar">
            <Container fluid>
                <Navbar.Brand href="#" id="logo">Al Mansouri
                </Navbar.Brand>
                <Navbar.Toggle id='btn' aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas style={{width:'60%'}}
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
            >
                <Offcanvas.Header closeButton className='OffcanvasBody ' >
                    <Offcanvas.Title  id={` offcanvasNavbarLabel-expand-${expand} `}>
                    <Navbar.Brand href="#" id="logo">Al Mansouri
                    </Navbar.Brand> </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="OffcanvasBody" >
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                    <Link closeButton className='OffcanvasBody' id="linkn" to="/"> Home</Link>
                    <Link closeButton id="linkn" to="#">Adout</Link>
                    <NavDropdown
                    id="linkn"
                    title="Hadiths"
                >
                <NavDropdown.Item href="/InputPage">elctron</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item closeButton href="/Chackout">ChackOut</NavDropdown.Item>
                </NavDropdown>
                    </Nav>
                <Form className="flex">
                    <Link closeButton id="linkn" to="/Cart"><Button variant="outline-danger" style={{fontSize:'14px'}}>Cart<FaCartPlus  /></Button></Link>
                    <Link closeButton id="linkn" to="/RagistrPadg"><Button variant="outline-danger" style={{fontSize:'14px'}}>RegisterPage<AiOutlineLogin  /></Button></Link>
                    <Link closeButton id="linkn" to="/LoginPadg"><Button variant="outline-danger" style={{fontSize:'14px'}}>Login<AiOutlineLogin  /></Button></Link>
                    </Form>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Container>
        </Navbar>
    ))}
        
        <Routes>
        </Routes>
    </>

)
}

export default Navebar
