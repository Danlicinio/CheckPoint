import React, { useEffect, useState } from 'react'
import { Container, Navbar, Button, NavbarBrand, Progress, Nav, NavItem, NavLink, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
export default function Cadastro() {

    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [valor, setValor] = useState();
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        console.log(nome)
    }, [nome])

    async function cadastrarProduto() {
        setMensagem('')
            const request = await fetch('http://localhost:3001/products', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: nome,
                    description: descricao,
                    price: valor,
                    active: true,
                }),
            });

            const envioEmail = await fetch('http://localhost:8080/send-email', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "emailFrom": " dani.licinio@gmail.com",
                    "emailTo": " dani.licinio@gmail.com",
                    "subject": "Cadastro de produto com sucesso",
                    "text": "Produto cadastrado com sucesso no banco de dados"
                  }),
                  redirect: 'follow'
            });
        
            if(request.status === 201 || request.status === 200 && envioEmail.status === 200){
                setMensagem("Produto cadastrado")
            }else{
                console.log(request.status)
                setMensagem("Erro ao cadastrar. Revise os dados e tente novamente")
            }
            
    }

    function mostrarAviso() {
        if (mensagem != '') {
            return (

                <Alert color="primary">
                    {mensagem}
                </Alert>
            )
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
                {mostrarAviso()}
                <h3>Cadastro de produtos</h3>
                <Form>
                    <FormGroup>
                        <Label for="nomeProduto">
                            Nome
                        </Label>
                        <Input
                            id="nomeProduto"
                            name="nome"
                            placeholder="Digite o nome do produto"
                            type="text"
                            onChange={(e) => {
                                e.preventDefault()
                                setNome(e.target.value)
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="descricao">
                            Descrição
                        </Label>
                        <Input
                            id="descricaoProduto"
                            name="descricao"
                            placeholder="Digite a descricao do produto"
                            type="text"
                            onChange={(e) => {
                                e.preventDefault()
                                setDescricao(e.target.value)
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="descricao">
                            Valor em reais
                        </Label>
                        <Input
                            id="descricaoProduto"
                            name="descricao"
                            placeholder="Digite a descricao do produto"
                            type="real"
                            onChange={(e) => {
                                e.preventDefault()
                                setValor(e.target.value)
                            }}
                        />
                    </FormGroup>

                    <Button onClick={cadastrarProduto}>
                        Cadastrar
                    </Button>
                </Form>
            </Container>
        </>
    )
}