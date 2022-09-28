import React from 'react'
import { Container, Navbar, Button, NavbarBrand, Progress, Collapse, Nav, NavItem, NavLink } from 'reactstrap'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
      <Navbar
        color="dark"
        expand="md"
        dark >
        <NavbarBrand href="/">Checkpoint</NavbarBrand>
          
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/produtos/lista">Lista Produtos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/produtos/cadastro">
                  Cadastro produtos
                </NavLink>
              </NavItem>
            </Nav>

      </Navbar>
      <Container>
        <h1>Home</h1>
      </Container>
    </>
  )
}