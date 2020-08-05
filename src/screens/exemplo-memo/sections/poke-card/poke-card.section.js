import React from 'react'

export function PokeCard({ id, nome }) { 

  return (
    <div>
      <img src={require(`../../db/imgs/${nome.toLowerCase()}.png`)} alt={nome}/>
      <p>#{id} - {nome}</p>
    </div>
  )
}

