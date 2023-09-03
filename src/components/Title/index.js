import { Container } from "./styles"

export const Title = ({ children }) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  )
}