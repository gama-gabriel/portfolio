async function SelecionarDados()
{
    const resposta = await fetch("http://127.0.0.1:5500/players.json");
    const dados = await resposta.json();
    return dados
}
async function RetornarDados()
{
    const dados = await SelecionarDados()
    dados.forEach(element => 
    {
        console.log(element.PName)     
    });

}
RetornarDados()
