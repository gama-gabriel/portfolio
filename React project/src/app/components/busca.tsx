"use client"
import { useState, useEffect } from 'react'
import styles from '../page.module.css'
import Tabela from './tabela'

type Player = 
{
  id: number,
  PName: string,
  POS: string,
  Team: string,
  Age: number
  PPG: number,
  APG: number,
  RPG: number,
  SPG: number,
  BPG: number,
  [`FG%`]: number,
  [`3P%`]: number,
  [`FT%`]: number,
}

export default function Buscar({ lista, resposta }: { lista : Player[], resposta : any})
{
  let terminado = false
  const [playersList, setPlayersList] = useState<any[]>([])
  const [busca, setBusca] = useState("")
  const [selectedPlayer, setSelectedPlayer] = useState<any | null>(null)
  const [tentativa, setTentativa] = useState(1)
  let escolhidoF = {}

  
  if (playersList.length === 0) 
  {
    setPlayersList(lista)
  }

  function criarLinha(objeto: object)
  {
    const valores = Object.values(objeto)
    
    return(
    <div>


    </div>)
  }
  
  const handleClick = (item: any) => 
  {
    setSelectedPlayer(item)
    setTentativa((prevTentativa) => prevTentativa + 1)
    if (item.id == resposta.id)
    {
      terminado = true
      console.log(terminado)
    }
    
  }
  
  return(
  <>
  <input type="search" name={styles.busca} id={styles.busca} placeholder={`Guess ${tentativa} of 8`} autoComplete="off" onChange={(e)=>(setBusca(e.target.value))}/><br/>

      <ul id={styles.resultados}>
      {playersList.filter((item) =>
          item = item.PName.toLowerCase().includes(busca.toLowerCase())  
      ).map((item)=> (
          <li onClick={() => handleClick(item)} key={item.id}>{item.PName}</li> ) 
      )}
      </ul>
      
      <p>{resposta.PName}</p>
      <Tabela lista={resposta} tentativa={tentativa} terminou={terminado}></Tabela>
        {selectedPlayer && criarLinha(selectedPlayer)}
  </>
  )

}