import * as C from './styles'
import { Title } from './components/title/index'
import { Pesquisa } from './components/pesquisa/index'
function App() {
  return (
    <C.Container>
      <Title />
      <Pesquisa />
    </C.Container>
  )
}

export default App
