import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header({navInfo}){
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
                <Nav ref={navInfo}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#abouts">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contacts">Contacts</Nav.Link>
                    <Nav.Link
                        href="https://github.com/Cirhuzalain"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <span className="fa-stack fa-1x">
                            <i className="fa fa-circle fa-stack-2x text-primary" />
                            <i className="fab fa-github fa-stack-2x fa-inverse" />
                        </span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://twitter.com/cirhuzalain"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <span className="fa-stack fa-1x">
                            <i className="fa fa-circle fa-stack-2x text-primary" />
                            <i className="fab fa-twitter fa-stack-2x fa-inverse" />
                        </span>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}