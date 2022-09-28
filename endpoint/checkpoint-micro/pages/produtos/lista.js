import { React, useEffect, useState } from 'react'
import { Container, Navbar, Button, NavbarBrand, Progress, NavItem, Nav, NavLink, Table } from 'reactstrap'

export default function Lista() {

    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        getProdutos()
    }, [])

    async function getProdutos() {
        const response = await fetch('http://localhost:3001/products');
        const produtos = await response.json();
        setListaProdutos(produtos);
        console.log(listaProdutos)
    }

    function retornarProdutos() {

        if (listaProdutos != undefined) {
            return(
                listaProdutos.map(produto => {
                    console.log(produto.title)
                    return (
                        <tr>
                            <td>
                                {produto.title}
                            </td>
                            <td>
                                {produto.description}
                            </td>
                            <td>
                                {produto.price}
                            </td>
                        </tr>
                    )
                })
            )
        } else {
            return null
        }
    }
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
                <Table striped>
                    <thead>
                        <tr>
                            <th>
                                Nome
                            </th>
                            <th>
                                Descrição
                            </th>
                            <th>
                                Preço
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {retornarProdutos()}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}