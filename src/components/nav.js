import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }

  &.pagina-actual {
    border-bottom: 2px solid #fff;
  }
`

function Navegacion() {
  return (
    <Nav>
      <NavLink to="/" activeClassName="pagina-actual">
        Inicio
      </NavLink>
      <NavLink activeClassName="pagina-actual" to="/nosotros">
        Nosotros
      </NavLink>
    </Nav>
  )
}

export default Navegacion
