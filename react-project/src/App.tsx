import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'

function App() {

  const [conteudo, setConteudo] = useState('')
  
  useEffect(() => {
    // Recuperar o conteúdo do local storage ao carregar a página
    const conteudo = localStorage.getItem('conteudo')
    if (conteudo) {
      const filho = document.querySelector('.Filho') as HTMLInputElement
      filho.innerHTML = conteudo
      const pai = document.querySelector('.Pai') as HTMLInputElement
      pai.appendChild(filho)
    }

  }, [])

function handleSubmit(event: any) {
    event.preventDefault()
    const texto = document.getElementById('texto') as HTMLInputElement
    const content = texto.value
    const filho = document.querySelector('.Filho') as HTMLInputElement
    filho.innerHTML = content
    // Salvar o conteúdo em local storage
    localStorage.setItem('conteudo', content)

    // Limpar o campo de texto após o envio
    texto.value = ''
  }

  return (
    <>
        <Navbar />
      <div className="App">
        <textarea name="texto" placeholder='Escreva Aqui' id="texto" cols={30} rows={10} ></textarea>
        <button onClick={handleSubmit}>Enviar</button>
      </div>
      <div className="Pai">
        <h1>Conteúdo do Local Storage</h1>
        <p className='Filho'></p>
      </div>
      <Outlet />
    </>
  )
}

export default App
