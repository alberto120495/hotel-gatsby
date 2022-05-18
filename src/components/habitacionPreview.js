import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.8);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`

const Container = styled.div`
  border: 1px solid #e1e1e1;
  margin-bottom: 2rem;
`

const ContainerHabitaciones = styled.div`
  padding: 2rem;

  h3 {
    font-size: 3rem;
    text-align: center;
  }

  p {
    text-align: justify;
  }
`

function HabitacionPreview({ habitacion }) {
  const { contenido, imagen, titulo, slug } = habitacion
  return (
    <Container>
      <GatsbyImage image={imagen} alt={`titulo`} />

      <ContainerHabitaciones>
        <h3>{titulo}</h3>
        <p>{contenido}</p>
        <Boton to={slug}>Ver Habitacion</Boton>
      </ContainerHabitaciones>
    </Container>
  )
}

export default HabitacionPreview
