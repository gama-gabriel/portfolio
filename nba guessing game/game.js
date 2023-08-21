let nome = window.document.getElementById('Nome')
let posicao = window.document.getElementById('pos')
let pontos = window.document.getElementById('points')
let idade = document.getElementById('age')
let rebotes = document.getElementById('rebounds')
let time = document.getElementById('Team')
let assistencias = document.getElementById('assists')
let fg = document.getElementById('fg')
let tres_p = document.getElementById('3p')
let ft = document.getElementById('ft')
let stl = document.getElementById('stl')
let blk = document.getElementById('blk')

const barraPesquisa = document.getElementById('busca')
const resultados = document.getElementById('resultados')
let itensBuscados = 0
let tentativas = 1

async function criar_linha(nome_jogador, time_jogador, idade_jogador, posicao_jogador, ppg_jogador, ast_jogador, reb_jogador, fg_jogador, tres_p_jogador, ft_jogador, stl_jogador, blk_jogador)
{
    const newRow = document.createElement('tr');
    tabela = document.getElementById('resp1')
    linha = document.getElementById('linha')
    tabela.insertBefore(newRow, linha.parentNode)
    newRow.innerHTML = 
    `<td id="Nome" class="nome">${nome_jogador}</td>
    <td id="Team" class="stats">${time_jogador}</td>
    <td id="age" class="stats">${idade_jogador}</td>
    <td id="pos" class="stats">${posicao_jogador}</td>
    <td id="points" class="stats">${ppg_jogador}</td>
    <td id="assists" class="stats">${ast_jogador}</td> 
    <td id="rebounds" class="stats">${reb_jogador}</td> 
    <td id="fg" class="stats">${fg_jogador}</td> 
    <td id="3p" class="stats">${tres_p_jogador}</td> 
    <td id="ft" class="stats">${ft_jogador}</td> 
    <td id="stl" class="stats">${stl_jogador}</td> 
    <td id="blk" class="stats">${blk_jogador}</td>`

}

barraPesquisa.addEventListener('input', buscar)

async function buscar()
{
    itensBuscados = 0
    const busca = barraPesquisa.value.toLowerCase()

    const resposta = await fetch("http://127.0.0.1:5500/players.json")
    const dados = await resposta.json()

    resultados.innerHTML = ''

    const igualarDados = dados.filter(item =>
        item.PName.toLowerCase().includes(busca)
        )

    igualarDados.forEach(item => {
        if (itensBuscados < 5)
        {
            const lista = document.createElement('li')
            lista.textContent = `${item.PName}`
            lista.setAttribute('id', item.id)
            lista.addEventListener('click', () => selecionarJog(item.id, item.PName, item.Team, item.Age, item.POS, item.PPG, item.APG, item.RPG, item["FG%"], item["3P%"], item["FT%"], item.SPG, item.BPG))
            resultados.appendChild(lista)
            itensBuscados++
        }
      });
    return dados
 
}

function selecionarJog(id_jogador, nome_jogador, time_jogador, idade_jogador, posicao_jogador, ppg_jogador, ast_jogador, reb_jogador, fg_jogador, tres_p_jogador, ft_jogador, stl_jogador, blk_jogador) 
{

    resultados.innerHTML = ''
    barraPesquisa.value = '' 
    criar_linha(nome_jogador, time_jogador, idade_jogador, posicao_jogador, ppg_jogador, ast_jogador, reb_jogador, fg_jogador, tres_p_jogador, ft_jogador, stl_jogador, blk_jogador)
    tentativas++
      
    
}
