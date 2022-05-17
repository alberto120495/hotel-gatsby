import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Titulo = styled.h2`
  text-align: center;
  font-size: 4rem;
  margin-top: 4rem;
`

const Contenido = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }

  p {
    line-height: 2;
    margin-top: 2rem;
    text-align: justify;
  }
`

function ContenidoNosotros() {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
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
      <Contenido>
        <p>{contenido}</p>
        <GatsbyImage image={imagen.gatsbyImageData} alt="inicio" />
      </Contenido>
    </>
  )
}

export default ContenidoNosotros
