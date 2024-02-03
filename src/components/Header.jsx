import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header(){
    return (
        <Navbar
            collapseOnSelect
            fixed="top"
            expand="lg"
            bg="dark"
            variant="dark"
            className="nav-custom"
            >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-center"
            >
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/quotes">Quotes</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/#abouts">About</Nav.Link>
                    <Nav.Link href="/#projects">Projects</Nav.Link>
                    <Nav.Link href="/#contacts">Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}