import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Navegacion from "./nav"

const FooterStyle = styled.footer`
  background-color: rgba(44, 62, 80);
  margin-top: 5rem;
  padding: 1rem;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const EnlaceHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`
const Title = styled.h1`
  color: #fff;
  text-align: center;
`

const CopyRight = styled.p`
  background-color: rgb(33, 44, 55);
  margin: 0;
  color: #fff;
  text-align: center;
  padding: 1rem;
`

function Footer({ title }) {
  const year = new Date().getFullYear()
  return (
    <>
      <FooterStyle>
        <Container>
          <Navegacion />
          <EnlaceHome to="/">
            <Title>Hotel Gatsby</Title>
          </EnlaceHome>
        </Container>
      </FooterStyle>
      <CopyRight>
        {title}, Todos los derechos Reservados {year} &copy;
      </CopyRight>
    </>
  )
}

export default Footer
