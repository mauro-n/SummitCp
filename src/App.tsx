import './App.css'
import { Navbar } from './components/Navbar'
import { PageMainText } from './components/PageMainText'
import { Container } from './components/Container'
import { CTA } from './components/CTA'
import { Spacing } from './components/Spacing'
import { Arrows } from './components/Arrows'
import { AppContext } from './context/AppContext'
import { TransformWrld } from './components/TransformWrld'
import { ImgCard3 } from './components/ImgCard3'
import { Palestrantes } from './components/Palestrantes'
import { FutureSection } from './components/FutureSection'

function App() {

  return (
    <>
      <Navbar />
      <Container>
        <AppContext>
          <Spacing size="lg" />
          <PageMainText />
          <Spacing size="xlg" />
          <CTA />
          <Spacing size="xlg" />
          <Arrows />
        </AppContext>
      </Container>
      <Spacing size="lg" />
      <Container>
        <>
          <TransformWrld />
          <Spacing size="md" />
          <ImgCard3 />
          <Spacing size="xlg" />
          <Palestrantes />
        </>
      </Container>
      <Spacing size="xlg" />
      <FutureSection />
    </>
  )
}

export default App
