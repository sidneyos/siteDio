import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture } from './styles';

const Header = ({ autenticado }) => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }
  const handleClickSignInc = () => {
    navigate('/cadastro')
  }
  return (
    <Wrapper>
      <Container>
        <Row>
          <MenuRight href="/"><img href="/" src={logo} alt="Logo da dio" /></MenuRight>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
          ) : (
            <>
              <Button title="Entrar" onClick={handleClickSignIn} />
              <Button title="Cadastrar" onClick={handleClickSignInc} />

            </>)}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
