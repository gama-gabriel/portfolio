"use client"
import { useState, useRef } from 'react'
import styles from '../page.module.css'
import Tabela from './tabela'
import Linha from './linha'
import { Player } from '../types/player'
import { Dialog } from 'primereact/dialog'



export default function Buscar({ lista, resposta, img_times, player_images }: { lista : Player[], resposta : any, img_times: any, player_images: any})
{
  const [terminado, setTerminado] = useState(false)
  const [playersList, setPlayersList] = useState<any[]>([])
  const [busca, setBusca] = useState("")
  const [selectedPlayer, setSelectedPlayer] = useState<any | null>(null)
  const [tentativa, setTentativa] = useState(1)
  const [mostrarLinha, setMostrarLinha] = useState(false)
  const [listaRespostas, setListaRespostas] = useState<any>([])

  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const [isOpen, setIsOpen] = useState<any>(false)
  

  
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
  function abrir()
  {
    setIsOpen(true)
    dialogRef.current?.showModal()
  }
  
  
  function fechar()
  {
    setIsOpen(false)
    dialogRef.current?.close()
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
      <Tabela lista={resposta} tentativa={tentativa} terminou={terminado} img_times={img_times}></Tabela>

      <table className={styles.respostas}>
        <tbody>
          {mostrarLinha &&  criarLinha(selectedPlayer)}
          <Linha key={tentativa} lista={listaRespostas} resposta={resposta} tentativa={tentativa - 1} terminou={terminado} img_times={img_times}></Linha>
        </tbody>
    </table>
    <p onClick={abrir}>Abrir</p>
    <dialog ref={dialogRef} onClose={() => setIsOpen(false)} id={styles.help}>
      <h1>How to Play</h1>
      <p>Guess which player averaged the stats highlighted in yellow. You'll have 8 attempts!</p>

      <Tabela lista={resposta} tentativa={tentativa} terminou={terminado} img_times={img_times}></Tabela>

      <p>With every wrong attempt you have, another stat will be revealed.</p>
      <p>You may get other tips if you get anything that matches the answer. They will be highlighted in
        <span style={{color:'#a5fa97'}}>&nbsp;green</span>
      .</p>
      <p>*Player needs to have played at least 100 minutes to qualify</p>
      <button className={styles.button} role="button">Button 6</button>
    </dialog>

  </>
  )

}