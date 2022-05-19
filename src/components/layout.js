import React from "react"
import Helmet from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import { createGlobalStyle } from "styled-components"
import useSeo from "../hooks/useSeo"
const GlobalStyle = createGlobalStyle`
    html{
        font-size:62.5% ;
        box-sizing: border-box;
    }
    *, *:before, *:after {
         box-sizing: inherit;
        }
    body {
        font-size:18px ;
        font-size:1.8rem ;
        line-height:1.5 ;
        font-family: 'PT Sans', sans-serif;
    }
    h1,h2,h3{
        margin:0;
        line-height:1.5 ;
    }
    h1,h2{
        font-family:"Roboto", serif ;
    }
    h3{
        font-family:"PT Sans", sans-serif ;
    }
    ul{
        list-style:none;
        margin:0;
        padding:0;
    }
`

function Layout({ children }) {
  const seo = useSeo()
  const {
    fallbackSeo: { description, title },
  } = seo

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
          as="style"
          crossorigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          as="style"
          crossorigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          as="style"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;1,700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
          as="style"
          crossorigin="anonymous"
        />
      </Helmet>

      <Header />
      {children}

      <Footer title={title} />
    </>
  )
}

export default Layout
