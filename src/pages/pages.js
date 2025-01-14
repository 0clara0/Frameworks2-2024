import Menu from "./components/navbar"
import Footer from "./components/footer"
import { Container } from "react-bootstrap"

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
  }
   
  export default function Page({ repo }) {
    return (
      <main>
        <Menu/>
        <Container>
        <p>{repo.stargazers_count}</p>
        </Container>
        <Footer/>
      </main>
    )
  }