import { useState } from 'react'
import * as C from './styles'

export const Pesquisa = () => {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [mensagem, setMensagem] = useState('')
  function calcular() {
    const alt = altura / 100
    const imc = peso / (alt * alt)

    if (imc < 18.5) {
      setMensagem(
        `Seu IMC é de ${imc.toFixed(2)}. Portanto, está baixo do peso.`
      )
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem(
        `Seu IMC é de ${imc.toFixed(2)}. Portanto, está no peso normal.`
      )
    } else if (imc >= 25 && imc < 29.9) {
      setMensagem(`Seu IMC é de ${imc.toFixed(2)}. Portanto, está sobrepeso.`)
    } else if (imc >= 30 && imc < 34.9) {
      setMensagem(
        `Seu IMC é de ${imc.toFixed(2)}. Portanto, está na obesidade grau I.`
      )
    } else if (imc >= 35 && imc < 39.9) {
      setMensagem(
        `Seu IMC é de ${imc.toFixed(2)}. Portanto, está na obesidade grau II.`
      )
    } else {
      setMensagem(
        `Seu IMC é de ${imc.toFixed(2)}. Portanto, está na obesidade grau III.`
      )
    }
  }
  return (
    <C.Container>
      <C.AreaDigitar
        placeholder="Peso em (kg)"
        value={peso}
        onChange={e => setPeso(e.target.value)}
      ></C.AreaDigitar>
      <C.AreaDigitar
        placeholder="Altura em (cm)"
        value={altura}
        onChange={e => setAltura(e.target.value)}
      ></C.AreaDigitar>
      <C.AreaClick onClick={calcular}>Calcular</C.AreaClick>
      <C.AreaMensagem>{mensagem}</C.AreaMensagem>
    </C.Container>
  )
}
