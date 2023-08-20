let nome = window.document.getElementById('Nome')
let posicao = window.document.getElementById('Pos')
let pontos = window.document.getElementById('points')
let idade = document.getElementById('age')
let rebotes = document.getElementById('rebounds')
let time = document.getElementById('team')
let assistencias = document.getElementById('assists')
let fg = document.getElementById('fg')
let tres_p = document.getElementById('3p')
let ft = document.getElementById('ft')
let stl = document.getElementById('stl')
let blk = document.getElementById('blk')

const barraPesquisa = document.getElementById('busca')
const resultados = document.getElementById('resultados')
let itensBuscados = 0

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
            lista.addEventListener('click', () => selecionarJog(item.PName, item.Team, item.POS, item.PPG, item.APG))
            resultados.appendChild(lista)
            itensBuscados++
        }
      });
    return dados
 
}

function selecionarJog(nome_jogador, posicao_jogador, ppg_jogador, ast_jogador) 
{
    nome.innerText = nome_jogador
    posicao.innerText = posicao_jogador
    pontos.innerText = ppg_jogador
    assistencias.innerText = ast_jogador
    resultados.innerHTML = ''
    barraPesquisa.value = ''   
    
}
