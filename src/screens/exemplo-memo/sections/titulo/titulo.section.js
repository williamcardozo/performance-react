import React, { memo } from 'react'

function TituloSection({ nome }) {
  console.log("render")
 
  return (
    <h1>Seja bem vindo! {nome}</h1>
  )
}

export const Titulo = memo(TituloSection)