import React from "react"
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

const Title = styled.h1`
  color: #fff;
  text-align: center;
`

function Header() {
  return (
    <HeaderStyle>
      <Container>
        <Title>Hotel Gatsby</Title>
        <Navegacion />
      </Container>
    </HeaderStyle>
  )
}

export default Header
