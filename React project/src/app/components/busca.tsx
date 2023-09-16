"use client"
import { useState, useEffect } from 'react'
import styles from '../page.module.css'
import Tabela from './tabela'
import Linha from './linha'
import { Player } from '../types/player'



export default function Buscar({ lista, resposta }: { lista : Player[], resposta : any})
{
  const [terminado, setTerminado] = useState(false)
  const [playersList, setPlayersList] = useState<any[]>([])
  const [busca, setBusca] = useState("")
  const [selectedPlayer, setSelectedPlayer] = useState<any | null>(null)
  const [tentativa, setTentativa] = useState(1)
  const [mostrarLinha, setMostrarLinha] = useState(false)
  const [listaRespostas, setListaRespostas] = useState<any>([])
  

  
  if (playersList.length === 0) 
  {
    setPlayersList(lista)
  }

  function criarLinha(objeto: object): any
  {
    // const valores = Object.values(objeto)
    setListaRespostas([...listaRespostas, objeto])
    setMostrarLinha(false)
  }
  
  const handleClick = (item: any) => 
  {
    setSelectedPlayer(item)
    setTentativa((prevTentativa) => prevTentativa + 1)
    setMostrarLinha(true)
    setBusca("")
    if (item.id == resposta.id)
    {
      setTerminado(true) 
      
      console.log(terminado)
    }
  }
  
  return(
  <>
  <input type="search" name={styles.busca} id={styles.busca} placeholder={`Guess ${tentativa} of 8`} autoComplete="off" value={busca} onChange={(e)=>(setBusca(e.target.value))}/><br/>

      <ul id={styles.resultados}>
      {busca != '' && playersList.filter((item) =>
          item = item.PName.toLowerCase().includes(busca.toLowerCase())  
      ).map((item)=> (
          <li onClick={() => handleClick(item)} key={item.id}>{item.PName}</li> ) 
      )}
      </ul>
      
      <p>{resposta.PName}</p>
      <Tabela lista={resposta} tentativa={tentativa} terminou={terminado}></Tabela>

      <table className={styles.respostas}>
        <tbody>
          {mostrarLinha &&  criarLinha(selectedPlayer)}
          <Linha key={tentativa} lista={listaRespostas} resposta={resposta} tentativa={tentativa} terminou={terminado}></Linha>
        </tbody>
    </table>


  </>
  )

}