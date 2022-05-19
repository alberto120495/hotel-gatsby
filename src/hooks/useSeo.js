import { graphql, useStaticQuery } from "gatsby"

function useSeo() {
  const data = useStaticQuery(graphql`
    query {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `)
  return data.datoCmsSite.globalSeo
}

export default useSeo
