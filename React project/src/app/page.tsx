import styles from './page.module.css'
import { GetStaticProps } from 'next';
import ItensLista from '../../components/itensLista'
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
  const players = await resposta.json()

  const resp_igm_times = await fetch("https://nba-players-api-alpha.vercel.app/teams")
  const img_times = await resp_igm_times.json()

  const resp_player_imgs = await fetch("https://nba-players-api-alpha.vercel.app/player_images/")
  const player_imgs = await resp_player_imgs.json()

  const data = 
  {
    players: players,
    img_times: img_times,
    player_imgs: player_imgs
  }
  return data 
}
  



export default async function Home() 
{
  const data = await loadData()

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
    const n = Math.floor(Math.random() * (468)) + 1
    console.log(n)
    const data = await loadData()
    const escolhido = data.players.find((jogador: any) => jogador.id === n)
    return escolhido
  }


  return (
    <>
    <div className='fullbody'>
      <p>Hello World</p>
      <Busca lista={data.players} resposta={await escolher()} img_times={data.img_times} player_images={data.player_imgs}></Busca>

      
      
    </div>

    <footer className={styles.footer}>made by: Gabriel Gama</footer>  
    </>
  )
}
