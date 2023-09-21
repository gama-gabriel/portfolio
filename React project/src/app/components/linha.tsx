import { IndexKind } from 'typescript'
import styles from '../page.module.css'

export default function Linha({lista, resposta, tentativa, terminou, img_times}: any)
{
    return(
    <>
    {
        lista.map((jogador: any, index: number) =>
        (
        <tr key={index} className={index == (tentativa - 1) ? styles.fade_in : ''}>
            <td 
                className={resposta.PName === jogador.PName ? `${styles.nome} ${styles.acertou}` : styles.nome}>{jogador.PName}</td>
            <td 
                className={resposta.PPG === jogador.PPG ? `${styles.stats} ${styles.acertou}` : styles.stats}>{jogador.PPG}
            </td>
            <td 
                className={resposta["FG%"] === jogador["FG%"] ? `${styles.stats} ${styles.acertou}` : styles.stats}>{jogador["FG%"]}
            </td>
            <td 
                className={resposta["3P%"] === jogador["3P%"] ? `${styles.stats} ${styles.acertou}` : styles.stats}> {jogador["3P%"]}
            </td>
            <td 
                className={resposta["FT%"] === jogador["FT%"] ? `${styles.stats} ${styles.acertou}` : styles.stats}>{jogador["FT%"]}
            </td>
            <td 
                className={resposta.RPG === jogador.RPG ? `${styles.stats} ${styles.acertou}` : styles.stats}>{jogador.RPG}
            </td>
            <td 
                className={resposta.APG === jogador.APG ? `${styles.stats} ${styles.acertou}` : styles.stats}>{jogador.APG}
            </td>
            <td 
                className={resposta.POS === jogador.POS ? `${styles.stats} ${styles.acertou}` : styles.stats}>{jogador.POS
            }</td>
            <td 
                className={resposta.Team === jogador.Team ? `${styles.teams} ${styles.acertou}` : styles.teams}>
                <img src={img_times.find((item: any) => item.TName == jogador.Team).team_img} alt="Team" />
                {jogador.Team}
            </td>
            <td 
                className={resposta.Age === jogador.Age ? `${styles.stats} ${styles.acertou}` : styles.stats}>{jogador.Age}</td>
            <td 
                className={resposta.BPG === jogador.BPG ? `${styles.stats} ${styles.acertou}` : styles.stats}>{jogador.BPG}
            </td>
            <td 
                className={resposta.SPG === jogador.SPG ? `${styles.stats} ${styles.acertou}` : styles.stats}>{jogador.SPG}
            </td>
        </tr>))
    }
    </>
    )
}