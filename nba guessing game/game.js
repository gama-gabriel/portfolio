function jogadorAleatorio(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function selResposta(onGoing = false)
{
    const n = jogadorAleatorio(1,468)

    const resposta = await fetch("http://127.0.0.1:5500/players.json")
    const dados = await resposta.json()
    if (onGoing == false)
    {
        dados.forEach(item => 
        {
            if (item.id == n)
            {
                escolhido = item
            }
        })
        T_pontos.innerText = escolhido.PPG
        T_fg.innerText = escolhido["FG%"]
        T_tres_p.innerText = escolhido["3P%"]
        T_ft.innerText = escolhido["FT%"]
    }

}

async function darDicas(terminou=false)
{
    if (terminou == true)
    {
        T_nome.innerText = escolhido.PName
        T_time.innerText = escolhido.Team
        T_idade.innerText = escolhido.Age
        T_posicao.innerText = escolhido.POS 
        T_assistencias.innerText = escolhido.APG
        T_rebotes.innerText = escolhido.RPG
        T_ft.innerText = escolhido["FG%"]
        T_stl.innerText = escolhido.SPG 
        T_blk.innerText  = escolhido.BPG
    }
    else if (tentativas == 2)
    {
        T_rebotes.innerText = escolhido.RPG
    }
    else if (tentativas == 3)
    {
        T_assistencias.innerText = escolhido.APG
    }
    else if (tentativas == 4)
    {
        T_posicao.innerText = escolhido.POS
    }
    else if (tentativas == 5)
    {
        T_time.innerText = escolhido.Team
    }
    else if (tentativas == 6)
    {
        T_idade.innerText = escolhido.Age
    }
    else if (tentativas == 7)
    {
        T_blk.innerText = escolhido.BPG
    }
    else if (tentativas == 8)
    {
        T_stl.innerText = escolhido.SPG
    }
}

function criar_linha(nome_jogador, time_jogador, idade_jogador, posicao_jogador, ppg_jogador, ast_jogador, reb_jogador, fg_jogador, tres_p_jogador, ft_jogador, stl_jogador, blk_jogador)
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

async function buscar()
{
    await selResposta(true)
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
      })
    return dados
}

async function selecionarJog(id_jogador, nome_jogador, time_jogador, idade_jogador, posicao_jogador, ppg_jogador, ast_jogador, reb_jogador, fg_jogador, tres_p_jogador, ft_jogador, stl_jogador, blk_jogador) 
{

    resultados.innerHTML = ''
    barraPesquisa.value = '' 
    criar_linha(nome_jogador, time_jogador, idade_jogador, posicao_jogador, ppg_jogador, ast_jogador, reb_jogador, fg_jogador, tres_p_jogador, ft_jogador, stl_jogador, blk_jogador)
    resposta = escolhido.id
    if (id_jogador == resposta ||  tentativas == 7)
    {
        darDicas(true)
    }
    else
    {
        tentativas++
        darDicas()
    }  
    
}

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
let T_nome = window.document.getElementById('T_Nome')
let T_posicao = window.document.getElementById('T_pos')
let T_pontos = window.document.getElementById('T_points')
let T_idade = document.getElementById('T_age')
let T_rebotes = document.getElementById('T_rebounds')
let T_time = document.getElementById('T_Team')
let T_assistencias = document.getElementById('T_assists')
let T_fg = document.getElementById('T_fg')
let T_tres_p = document.getElementById('T_3p')
let T_ft = document.getElementById('T_ft')
let T_stl = document.getElementById('T_stl')
let T_blk = document.getElementById('T_blk')
let escolhido = []

const barraPesquisa = document.getElementById('busca')
const resultados = document.getElementById('resultados')
let itensBuscados = 0
let tentativas = 1

barraPesquisa.addEventListener('input', buscar)

