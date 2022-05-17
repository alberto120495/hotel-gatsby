import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Titulo = styled.h2`
  text-align: center;
  font-size: 4rem;
  margin-top: 4rem;
`

const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  p {
    line-height: 2;
    margin-top: 2rem;
    text-align: justify;
  }
`

function ContenidoInicio() {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            gatsbyImageData
          }
        }
      }
    }
  `)
  const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0]

  return (
    <>
      <Titulo>{titulo}</Titulo>
      <TextoInicio>
        <p>{contenido}</p>
        <GatsbyImage image={imagen.gatsbyImageData} alt="inicio" />
      </TextoInicio>
    </>
  )
}

export default ContenidoInicio
