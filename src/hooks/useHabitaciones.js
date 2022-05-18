import { graphql, useStaticQuery } from "gatsby"

function useHabitaciones() {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          titulo
          id
          slug
          contenido
          imagen {
            gatsbyImageData
          }
        }
      }
    }
  `)
  return data.allDatoCmsHabitacion.nodes.map(habitacion => {
    return {
      titulo: habitacion.titulo,
      id: habitacion.id,
      slug: habitacion.slug,
      contenido: habitacion.contenido,
      imagen: habitacion.imagen.gatsbyImageData,
    }
  })
}

export default useHabitaciones
