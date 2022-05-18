import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Navegacion from "./nav"

const HeaderStyle = styled.header`
  background-color: #222;
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

function Header() {
  return (
    <HeaderStyle>
      <Container>
        <EnlaceHome to="/">
          <Title>Hotel Gatsby</Title>
        </EnlaceHome>
        <Navegacion />
      </Container>
    </HeaderStyle>
  )
}

export default Header
