import styled from 'styled-components'
import Canvas from '../components/Canvas';

const Sandbox = () => {

  return (
    <Container>
      <Canvas />
    </Container>
  )
}

export default Sandbox

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`