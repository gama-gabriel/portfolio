import styles from '../page.module.css'

export default function Linha({lista, resposta, tentativa, terminou}: any)
{
    return(
    <>
    {
        lista.map((jogador: any) =>
        (
        <tr key={tentativa}>
            <td style={{backgroundColor: resposta.PName === jogador.PName ? 'yellow' : '#dddddd'}}>{jogador.PName}</td>
            <td>{jogador.PPG}</td>
        </tr>))
    }
    </>
    )
}