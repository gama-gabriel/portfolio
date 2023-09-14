type JsonList = 
{
    id: number
    PName : string
    
}[]

const ItensLista = ({ lista }: any) => 
{
    return(
       <>
        {lista.map((item: any) => 
            (
              <li key={item.id}>{item.PName}</li>  
            ))}
       </> 
    )
}
export default ItensLista