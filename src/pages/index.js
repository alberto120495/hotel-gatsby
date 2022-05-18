import React from "react"
import styled from "styled-components"
import ContenidoInicio from "../components/contenidoInicio"
import ImagenHotel from "../components/imagenHotel"
import Layout from "../components/layout"
import useHabitaciones from "../hooks/useHabitaciones"
import HabitacionPreview from "../components/habitacionPreview"

const HabitacionesTitle = styled.h2`
  text-align: center;
  margin-top: 5rem;
  font-size: 3rem;
`

const ListaHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;
  }
`

const IndexPage = () => {
  const habitaciones = useHabitaciones()

  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />
      <HabitacionesTitle>Nuestras Habitaciones</HabitacionesTitle>
      <ListaHabitaciones>
        {habitaciones.map(habitacion => (
          <HabitacionPreview key={habitacion.id} habitacion={habitacion} />
        ))}
      </ListaHabitaciones>
    </Layout>
  )
}

export default IndexPage
