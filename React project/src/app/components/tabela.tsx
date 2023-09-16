import styles from '../page.module.css'

export default function Tabela({ lista, tentativa, terminou}: any)
{
    
    return(
        <div>
        <table className={styles.respostas} id={styles.tabela}>
        <tbody>
            <tr className={styles.definicoes}>
                <th >Player name</th>
                <th >PTS</th>
                <th >FG%</th>
                <th >3P%</th>
                <th >FT%</th>
                <th >REB</th> 
                <th >AST</th> 
                <th >Pos</th>
                <th >Team</th>
                <th >Age</th>
                <th >BLK</th> 
                <th >STL</th> 
            </tr>   
            <tr id={styles.tips}>
                <td id={styles.T_Nome} className={styles.nome}>{(tentativa > 8 || terminou)? lista.PName:''}</td>
                <td id={styles.T_points} className={styles.stats}>{lista.PPG}</td>
                <td id={styles.T_fg} className={styles.stats}>{lista[`FG%`]}</td> 
                <td id={styles.T_3p} className={styles.stats}>{lista[`3P%`]}</td>
                <td id={styles.T_ft} className={styles.stats}>{lista[`FT%`]}</td>
                <td id={styles.T_rebounds} className={styles.stats}>{(tentativa >= 2 || terminou)? lista.RPG:''}</td> 
                <td id={styles.T_assists} className={styles.stats}>{(tentativa >= 3 || terminou)? lista.APG:''}</td>
                <td id={styles.T_pos} className={styles.stats}>{(tentativa >= 4 || terminou)? lista.POS : ''}</td>
                <td id={styles.T_Team} className={styles.time}>{(tentativa >= 5 || terminou)? lista.Team:''}</td>
                <td id={styles.T_age} className={styles.stats}>{(tentativa >= 6 || terminou)? lista.Age:''}</td>
                <td id={styles.T_blk} className={styles.stats}>{(tentativa >= 7 || terminou)? lista.BPG:''}</td>
                <td id={styles.T_stl} className={styles.stats}>{(tentativa >= 8 || terminou)? lista.SPG:''}</td>  
            </tr>
        </tbody>
    </table>
    </div>
    
    )
}