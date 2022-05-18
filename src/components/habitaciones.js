import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const query = graphql`
  query ($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          gatsbyImageData
        }
      }
    }
  }
`

const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  width: 95%;

  h1 {
    text-align: center;
    margin-top: 4rem;
  }
`

function HabitacionTemplate({ data }) {
  const { titulo, contenido, imagen } = data.allDatoCmsHabitacion.nodes[0]

  return (
    <Layout>
      <MainContainer>
        <h1>{titulo}</h1>
        <p>{contenido}</p>
        <GatsbyImage image={imagen.gatsbyImageData} alt={titulo} />
      </MainContainer>
    </Layout>
  )
}

export default HabitacionTemplate
