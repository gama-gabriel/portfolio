
import Image from 'next/image'
import styles from './page.module.css'
import { GetStaticProps } from 'next';
import ItensLista from '../../components/itensLista'
import axios from 'axios'
import Busca from './components/busca';

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

type HomeProps = 
{
  dados: Player[]
}

async function loadData(): Promise<any>
{
  const resposta = await fetch("https://nba-players-api-alpha.vercel.app/players")
  const dados = await resposta.json()


  return  dados 
}
  



export default async function Home() 
{
  const allPlayers = await loadData()

  const exemplo = [{PName: "Paul George", id: 1}, {PName: "Terrance Mann", id: 2}]


  function criarLinha(lista: object)
  {
    const valores = Object.values(lista)
    return(
    <div>
    {valores.map((item) =>
    (
        <div key={item.id}>{item}</div>
    ))}
    </div>)
  }

  async function escolher()
  {
    "use server"
    const n = Math.floor(Math.random() * (468 - 1 + 1)) + 1
    console.log(n)
    const allPlayers = await loadData()
    const escolhido = allPlayers.find((jogador) => jogador.id === n)
    return(escolhido)
  }


  return (
    <>
    <div className='fullbody'>
    
      <p>Hello World</p>
      <Busca lista={allPlayers} resposta={await escolher()}></Busca>
      </div>

    <footer className={styles.footer}>made by: Gabriel Gama</footer>  
    </>
  )
}
